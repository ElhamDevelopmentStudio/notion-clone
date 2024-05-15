"use client";

import { IconPicker } from "@/components/IconPicker";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { Divide, ImageIcon, Smile, X } from "lucide-react";
import { ElementRef, TextareaHTMLAttributes, useRef, useState } from "react";
import TextAreaAutoSize from "react-textarea-autosize";

interface ToolbarProps {
  initialData: Doc<"documents">;
  Preview?: boolean;
}

export const Toolbar = ({ initialData, Preview }: ToolbarProps) => {
  const inputRef = useRef<ElementRef<"textarea">>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialData.title);

  const update = useMutation(api.documents.update);

  const enableInput = () => {
    if (Preview) {
      return;
    }
    setIsEditing(true);
    setTimeout(() => {
      setValue(initialData.title);
      inputRef.current?.focus();
    }, 0);
  };

  const disableInput = () => setIsEditing(false);

  const onInput = (value: string) => {
    setValue(value);
    update({
      id: initialData._id,
      title: value || "Untitled",
    });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      disableInput();
    }
  };

  const onIconSelect = (icon: string) => {
    update: ({
      id: initialData._id,
      icon,
    });
  };

  const removeIcon = useMutation(api.documents.removeIcon);

  const onRemoveIcon = () => {
    removeIcon({
      id: initialData._id,
    });
  };

  return (
    <div className="group relative">
      {!!initialData.icon && !Preview && (
        <div className="flex items-center gap-x-1 group/icon pt-6">
          <IconPicker asChild onChange={onIconSelect}>
            <p className="text-6xl hover:opacity-75 transition">
              {initialData.icon}
            </p>
          </IconPicker>
          <Button
            onClick={onRemoveIcon}
            className="rounded-full opacity-0 group-hover/icon:opacity-100 transition text-muted-foreground text-xs"
            variant="outline"
            size="icon"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}
      {initialData.icon && Preview && (
        <p className="text-6xl pt-6">{initialData.icon}</p>
      )}
      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-x-1 py-4">
        {!initialData.icon && !Preview && (
          <IconPicker asChild onChange={onIconSelect}>
            <Button
              className="text-muted-foreground text-xs"
              variant="outline"
              size="sm"
            >
              <Smile className="h-4 w-4 mr-2" />
              Add Icon
            </Button>
          </IconPicker>
        )}
        {!initialData.coverImage && !Preview && (
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={() => {}}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Add Cover
          </Button>
        )}
      </div>
      {isEditing && !Preview ? (
        <TextAreaAutoSize
          ref={inputRef}
          onBlur={disableInput}
          onKeyDown={onKeyDown}
          value={value}
          onChange={(e) => onInput(e.target.value)}
          className="text-5xl bg-transparent font-bold break-words outline-none text-[#3f3f3f] dark:text-[#cfcfcf] resize-none"
        />
      ) : (
        <div
          className="pb-[11.5px] text-5xl font-bold break-words outlin-none text-[#3f3f3f] dark:text-[#cfcfcf]"
          onClick={enableInput}
        >
          {initialData.title}
        </div>
      )}
    </div>
  );
};

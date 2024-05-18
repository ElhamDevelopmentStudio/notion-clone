"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/useSetting";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ModeToggle";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <DialogHeader className="border-b pb-3 mb-4">
          <motion.h2
            className="text-2xl font-semibold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Settings
          </motion.h2>
        </DialogHeader>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label className="text-lg text-gray-700 dark:text-gray-300">
                Appearance
              </Label>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Customize how Notion Clone looks on your device
              </span>
            </div>
            <ModeToggle />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label className="text-lg text-gray-700 dark:text-gray-300">
                Font Size
              </Label>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Adjust the font size of your notes
              </span>
            </div>
            <Slider
              className="w-1/2"
              defaultValue={[14]}
              min={12}
              max={24}
              step={1}
              aria-label="Font Size"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-y-1">
              <Label className="text-lg text-gray-700 dark:text-gray-300">
                Autosave
              </Label>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Automatically save your notes
              </span>
            </div>
            <Switch />
          </div>

          <div className="flex flex-col gap-y-4 ">
            <Label className="text-lg text-gray-700 dark:text-gray-300">
              Keyboard Shortcuts
            </Label>
            <div className="flex items-center gap-x-2 ">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Search Note:
              </span>
              <Input
                disabled
                className="w-20 p-2 bg-gray-200 dark:bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                defaultValue="Ctrl+K"
              />
            </div>
            <div className="flex items-center gap-x-2 cursor-default">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Save Note:
              </span>
              <Input
                disabled
                className="w-20 p-2 bg-gray-200 dark:bg-gray-700 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                defaultValue="Ctrl+S"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="mt-4 px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-lg shadow-lg">
                Save Settings
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

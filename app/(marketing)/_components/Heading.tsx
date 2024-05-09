"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Welcome to notion clone. Be happy you made it, I certainly am. This is{" "}
        <span className="underline">Notion Clone</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion clone is just like notion except a bit worse, so good luck with
        this shit.
      </h3>
      <Button>
        Enter Notion Clone <ArrowRight />
      </Button>
    </div>
  );
};

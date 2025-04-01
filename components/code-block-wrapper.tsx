"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
}

function BlurBottom() {
  return (
    <div className="blur-container absolute inset-x-0 bottom-0 h-full">
      <div className="mask-gradient-1 pointer-events-none absolute right-0 bottom-0 left-0 z-[1] h-48 backdrop-blur-[0.078125px]"></div>
      <div className="mask-gradient-2 pointer-events-none absolute right-0 bottom-0 left-0 z-[2] h-48 backdrop-blur-[0.15625px]"></div>
      <div className="mask-gradient-3 pointer-events-none absolute right-0 bottom-0 left-0 z-[3] h-48 backdrop-blur-[0.3125px]"></div>
      <div className="mask-gradient-4 pointer-events-none absolute right-0 bottom-0 left-0 z-[4] h-48 backdrop-blur-[0.625px]"></div>
      <div className="mask-gradient-5 pointer-events-none absolute right-0 bottom-0 left-0 z-[5] h-48 backdrop-blur-[1.25px]"></div>
      <div className="mask-gradient-6 pointer-events-none absolute right-0 bottom-0 left-0 z-[6] h-48 backdrop-blur-[2.5px]"></div>
      <div className="mask-gradient-7 pointer-events-none absolute right-0 bottom-0 left-0 z-[7] h-48 backdrop-blur-[5px]"></div>
      <div className="mask-gradient-8 pointer-events-none absolute right-0 bottom-0 left-0 z-[8] h-48 backdrop-blur-[10px]"></div>
    </div>
  );
}

export function CodeBlockWrapper({
  expandButtonTitle = "View Code",
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn("relative overflow-hidden", className)} {...props}>
        <CollapsibleContent
          forceMount
          className={cn("overflow-hidden", !isOpened && "max-h-72")}
        >
          <div
            className={cn(
              "[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]",
              !isOpened ? "[&_pre]:overflow-hidden" : "[&_pre]:overflow-auto]",
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        {!isOpened && <BlurBottom />}
        <div
          className={cn(
            "absolute z-10 flex items-center justify-center p-2",
            isOpened ? "inset-x-0 bottom-0 h-12" : "inset-x-0 bottom-0 h-48",
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="mb-2 h-8 rounded-md text-xs">
              {isOpened ? "Collapse" : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}

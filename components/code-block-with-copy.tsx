"use client";

import * as React from "react";
import { CopyButton } from "@/components/copy-button";

interface CodeBlockWithCopyProps {
  children: React.ReactNode;
}

export function CodeBlockWithCopy({ children }: CodeBlockWithCopyProps) {
  const codeRef = React.useRef<HTMLDivElement>(null);
  const [codeContent, setCodeContent] = React.useState("");

  React.useEffect(() => {
    if (codeRef.current) {
      const codeElement = codeRef.current.querySelector("code");

      if (codeElement) {
        const rawText = codeElement.textContent || "";
        setCodeContent(rawText);
      } else {
        const content = codeRef.current.textContent || "";
        setCodeContent(content);
      }
    }
  }, [children]);

  return (
    <div className="group relative" ref={codeRef}>
      <div className="absolute top-3 right-3 z-20">
        <CopyButton
          value={codeContent}
          variant="ghost"
          className="size-8 bg-zinc-800/80 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50"
        />
      </div>
      {children}
    </div>
  );
}

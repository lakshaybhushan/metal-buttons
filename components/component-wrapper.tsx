"use client";

import { OpenInV0Button } from "@/components/open-in-v0";
import { cn } from "@/lib/utils";
import React from "react";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export const ComponentWrapper = ({
  className,
  children,
  name,
}: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        "relative max-w-screen rounded-xl border bg-gray-50",
        className,
      )}
    >
      <div className="flex items-center justify-end gap-2 p-4">
        <OpenInV0Button url={`https://button.lakshb.dev/r/${name}.json`} />
      </div>

      <div className="flex min-h-[350px] w-full items-center justify-center p-10">
        {children}
      </div>
    </div>
  );
};

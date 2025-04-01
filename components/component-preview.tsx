"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ComponentWrapper } from "@/components/component-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlockWithCopy } from "@/components/code-block-with-copy";

const Index: Record<string, any> = {
  "metal-button-demo": {
    name: "metal-button-demo",
    description: "A basic example of the metal button component",
    type: "registry:page",
    author: "Lakshay Bhushan",
    registryDependencies: ["https://button.lakshb.dev/r/metal-button.json"],
    files: [
      {
        path: "registry/example/metal-button-demo.tsx",
        type: "registry:page",
        target: "components/metal-button-demo.tsx",
      },
    ],
    component: React.lazy(async () => {
      try {
        const mod = await import("@/registry/example/metal-button-demo");
        return { default: mod.MetalButtonDemo };
      } catch (error) {
        console.error("Error loading component:", error);
        return {
          default: () => <div>Error loading component</div>,
        };
      }
    }),
    meta: undefined,
  },
};

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export function ComponentPreview({
  name,
  children,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes.length > 0 ? Codes[0] : null;

  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component;

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-muted-foreground text-sm">
          Component{" "}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div
      className={cn(
        "relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]",
        className,
      )}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        {!preview && (
          <div className="flex items-center justify-between pb-3">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
              >
                Code
              </TabsTrigger>
            </TabsList>
          </div>
        )}
        <TabsContent value="preview" className="relative rounded-md">
          <ComponentWrapper name={name}>
            <React.Suspense
              fallback={
                <div className="text-muted-foreground flex items-center text-sm">
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col space-y-4">
            {Code ? (
              <CodeBlockWithCopy>
                <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                  {Code}
                </div>
              </CodeBlockWithCopy>
            ) : (
              <div className="w-full rounded-md bg-gray-50 p-4 text-sm">
                No code example provided
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

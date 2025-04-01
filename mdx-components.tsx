// import type { MDXComponents } from "mdx/types";
// import { cn } from "./lib/utils";
// import { CopyButton } from "@/components/copy-button";

// const components = {
//   h1: ({ children }: { children: React.ReactNode }) => (
//     <h1 className="inline-block bg-gradient-to-b from-black to-gray-500 bg-clip-text pr-1 text-left text-8xl font-bold tracking-tighter text-transparent">
//       {children}
//     </h1>
//   ),
//   code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
//     <code
//       className={cn(
//         "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm",
//         className,
//       )}
//       {...props}
//     />
//   ),
// };

// export function useMDXComponents(components: MDXComponents): MDXComponents {
//   return {
//     ...components,
//   };
// }

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { CodeBlockCommand } from "@/components/code-block-command";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { CopyButton } from "@/components/copy-button";
import { CodeBlockWithCopy } from "@/components/code-block-with-copy";
import type { MDXComponents } from "mdx/types";

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const otherComponents: MDXComponents = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ComponentPreview,
  ComponentSource: (props: any) => <ComponentSource {...props} />,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "inline-block bg-gradient-to-b from-black to-gray-500 bg-clip-text pr-1 text-left text-8xl font-bold tracking-tighter text-transparent",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <CustomLink
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-lg border dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
      <table
        className={cn("my-0 w-full overflow-hidden", className)}
        {...props}
      />
    </div>
  ),
  thead: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className={cn("border-b last:border-b-0", className)} {...props} />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("border-b last:border-b-0", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border-r px-6 py-3 text-left font-mono text-sm font-semibold tracking-tight text-balance last:border-r-0",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border-r px-6 py-3 text-sm last:border-r-0 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        "w-full justify-start rounded-none border-b bg-transparent p-0",
        className,
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        "text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none",
        className,
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold",
        className,
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    __bunCommand__,
    __withMeta__,
    __name__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
    __npmCommand__?: string;
    __pnpmCommand__?: string;
    __yarnCommand__?: string;
    __bunCommand__?: string;
    __withMeta__?: boolean;
    __name__?: string;
  }) => {
    if (
      __npmCommand__ ||
      __yarnCommand__ ||
      __pnpmCommand__ ||
      __bunCommand__
    ) {
      return (
        <CodeBlockCommand
          __npmCommand__={__npmCommand__}
          __pnpmCommand__={__pnpmCommand__}
          __yarnCommand__={__yarnCommand__}
          __bunCommand__={__bunCommand__}
        />
      );
    }

    return (
      <CodeBlockWithCopy>
        <pre
          className={cn(
            "mt-6 mb-4 max-h-[650px] overflow-x-auto rounded-xl border bg-zinc-950 px-4 py-4 dark:bg-zinc-900",
            className,
          )}
          {...props}
        />
      </CodeBlockWithCopy>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn("font-mono text-sm text-white", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "bg-card text-card-foreground hover:bg-muted/50 flex w-full flex-col items-center rounded-xl border p-6 shadow transition-colors sm:p-10",
        className,
      )}
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...otherComponents,
  };
}

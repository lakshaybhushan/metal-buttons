import { CodeBlockCommand } from "@/components/ui/code-block-command";
import {
  bunCommand,
  EXAMPLE_URL,
  npmCommand,
  pnpmCommand,
  yarnCommand,
} from "@/lib/utils";
import { MetalButton } from "@/registry/metal-button/metal-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OpenInV0Button } from "@/components/ui/open-in-v0";

export default function Home() {
  return (
    <main className="mx-auto my-8 max-w-[600px] px-4 md:my-16 md:max-w-[800px]">
      <h1 className="inline-block bg-gradient-to-b from-black to-gray-500 bg-clip-text pr-1 text-left text-8xl font-bold tracking-tighter text-transparent">
        Metal
        <br />
        Buttons
      </h1>
      <p className="max-w-lg pt-2 text-left text-2xl text-gray-500">
        A beautiful, customizable metal button component with tactile feedback!
      </p>

      <section className="mt-2 flex max-w-2xl flex-col">
        <div className="relative mt-4 flex min-h-[350px] w-full items-center justify-center rounded-xl border-2 bg-gray-100 p-10">
          <div className="absolute top-0 right-0 m-4 shadow-xl shadow-gray-300">
            <OpenInV0Button url={EXAMPLE_URL} />
          </div>

          <MetalButton variant="default" className="w-fit">
            Button
          </MetalButton>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Installation</h3>

          <Tabs defaultValue="cli" className="w-full">
            <TabsList className="text-muted-foreground inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0 outline-none">
              <TabsTrigger
                value="cli"
                className="border-b-2 border-b-transparent bg-none"
              >
                CLI
              </TabsTrigger>
              <TabsTrigger
                value="manual"
                className="border-b-2 border-b-transparent bg-none"
              >
                Manual
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cli" className="mt-4">
              <CodeBlockCommand
                __npmCommand__={npmCommand}
                __yarnCommand__={yarnCommand}
                __pnpmCommand__={pnpmCommand}
                __bunCommand__={bunCommand}
              />
            </TabsContent>

            <TabsContent value="manual" className="mt-4">
              <div className="rounded-xl"></div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="min-h-[300px]"></div>
      </section>
    </main>
  );
}

import { CodeBlockCommand } from "@/components/ui/code-block-command";
import { bunCommand, npmCommand, pnpmCommand, yarnCommand } from "@/lib/utils";
import { MetalButton } from "@/registry/metal-button/metal-button";
import { OpenInV0Button } from "@/components/ui/open-in-v0";
import { EXAMPLE_URL } from "@/lib/utils";

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
        <div className="mt-4 relative flex min-h-[350px] w-full items-center justify-center rounded-xl border-2 p-10">
          <div className="absolute right-0 top-0 m-4">
            <OpenInV0Button url={EXAMPLE_URL} />
          </div>

          <MetalButton variant="default" className="w-fit">
            Button
          </MetalButton>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Installation</h3>

          <CodeBlockCommand
            __npmCommand__={npmCommand}
            __yarnCommand__={yarnCommand}
            __pnpmCommand__={pnpmCommand}
            __bunCommand__={bunCommand}
          />
        </div>
      </section>
    </main>
  );
}

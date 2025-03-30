import { Button } from "@/components/ui/button";
import { OldButton } from "@/components/ui/oldbutton";
import { MetalButton } from "@/components/ui/metal-button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-center mb-8">Shinny Button</h1>
      <div>
        <MetalButton>Hello</MetalButton>
      </div>
      <p className="text-gray-500 text-center mt-8">
        Click the button to see magic happen!
      </p>
    </main>
  );
}

import { MetalButton } from "@/components/ui/metal-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Shinny Button</h1>
      <div>
        <MetalButton variant="default">Button</MetalButton>
        <MetalButton variant="primary">Button</MetalButton>
        <MetalButton variant="success">Button</MetalButton>
        <MetalButton variant="error">Button</MetalButton>
        <MetalButton variant="gold">Button</MetalButton>
        <MetalButton variant="bronze">Button</MetalButton>
      </div>
      <p className="mt-8 text-center text-gray-500">
        Click the button to see magic happen!
      </p>
    </main>
  );
}

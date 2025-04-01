#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";

const sourceFilePath = path.join(
  process.cwd(),
  "registry/metal-button/metal-button.tsx",
);
const targetFilePath = path.join(process.cwd(), "lib/metal-source.mdx");

function readFile(filePath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

function writeFile(filePath: string, content: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf8", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

async function syncMetalButton(): Promise<void> {
  try {
    console.log("🔄 Syncing metal-button.tsx to metal-source.mdx...");

    const tsxContent = await readFile(sourceFilePath);

    const mdxContent = await readFile(targetFilePath);

    const mdxPattern = /```tsx\n([\s\S]*?)```/;
    const mdxMatch = mdxContent.match(mdxPattern);

    if (!mdxMatch) {
      throw new Error("Could not find the code block in the MDX file");
    }

    const updatedMdxContent = mdxContent.replace(
      mdxPattern,
      `\`\`\`tsx\n${tsxContent}\`\`\``,
    );

    await writeFile(targetFilePath, updatedMdxContent);

    console.log(
      "✅ Successfully updated metal-source.mdx with the content from metal-button.tsx",
    );
  } catch (error) {
    console.error("❌ Error updating the MDX file:", error);
    process.exit(1);
  }
}

// Run the sync function
syncMetalButton();

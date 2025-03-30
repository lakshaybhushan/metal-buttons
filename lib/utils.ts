import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SITE = "https://button.lakshb.dev";
const REGISTRY_JSON = "metal-button.json";
export const URL = `${SITE}/r/${REGISTRY_JSON}`;

export const npmCommand = `npx shadcn@latest add "${URL}"`;
export const yarnCommand = `npx shadcn@latest add "${URL}"`;
export const pnpmCommand = `pnpm dlx shadcn@latest add "${URL}"`;
export const bunCommand = `bunx --bun shadcn@latest add "${URL}"`;

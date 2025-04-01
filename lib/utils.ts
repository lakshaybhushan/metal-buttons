import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SITE = "https://button.lakshb.dev";
const REGISTRY_JSON = "metal-button.json";
const EXAMPLE_JSON = "metal-button-demo.json";
export const URL = `${SITE}/r/${REGISTRY_JSON}`;
export const EXAMPLE_URL = `${SITE}/r/${EXAMPLE_JSON}`;

export const npmCommand = `npx shadcn@latest add "${URL}"`;
export const yarnCommand = `npx shadcn@latest add "${URL}"`;
export const pnpmCommand = `pnpm dlx shadcn@latest add "${URL}"`;
export const bunCommand = `bunx --bun shadcn@latest add "${URL}"`;

export const metalButtonSourceCode = `"use client";
import React from "react";
import { cn } from "@/lib/utils";

type ColorVariant =
  | "default"
  | "primary"
  | "success"
  | "error"
  | "gold"
  | "bronze";

interface MetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const colorVariants: Record<
  ColorVariant,
  {
    outer: string;
    inner: string;
    button: string;
    textColor: string;
    textShadow: string;
  }
> = {
  default: {
    outer: "bg-gradient-to-t from-[#A0A0A0] to-[#000]",
    inner: "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
    button: "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
  },
  primary: {
    outer: "bg-gradient-to-t from-[#90C2FF] to-[#0051B4]",
    inner: "bg-gradient-to-b from-[#D5F1FF] via-[#006AFF] to-[#CBF4FF]",
    button: "bg-gradient-to-b from-[#0080FF] to-[#7BC6FF]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]",
  },
  success: {
    outer: "bg-gradient-to-t from-[#7CCB9B] to-[#005A43]",
    inner: "bg-gradient-to-b from-[#C3FFE6] via-[#006056] to-[#8CFFDB]",
    button: "bg-gradient-to-b from-[#009472] to-[#50C2A0]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]",
  },
  error: {
    outer: "bg-gradient-to-t from-[#FF8E90] to-[#5A0000]",
    inner: "bg-gradient-to-b from-[#FFDEDE] via-[#A00003] to-[#FFAFAF]",
    button: "bg-gradient-to-b from-[#DD0E11] to-[#CD4C4E]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]",
  },
  gold: {
    outer: "bg-gradient-to-t from-[#D9B100] to-[#D7B700]",
    inner: "bg-gradient-to-b from-[#FFF9AA] via-[#D5A300] to-[#FFD000]",
    button: "bg-gradient-to-b from-[#E1B000] to-[#FFDE67]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]",
  },
  bronze: {
    outer: "bg-gradient-to-t from-[#FFB777] to-[#7F3C01]",
    inner: "bg-gradient-to-b from-[#FFDEC1] via-[#8F4300] to-[#FFA95D]",
    button: "bg-gradient-to-b from-[#B25700] to-[#FFBC7B]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]",
  },
};

export const MetalButton = React.forwardRef<
  HTMLButtonElement,
  MetalButtonProps
>(({ children, className, variant = "default", ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);

  // Set name to "button" if not provided
  const buttonProps = {
    ...props,
    name: props.name || "button",
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    buttonProps.onMouseDown?.(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    buttonProps.onMouseUp?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    buttonProps.onMouseLeave?.(e);
  };

  const ShineEffect = () => {
    return (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-full transition-opacity duration-300",
          isPressed ? "opacity-20" : "opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>
    );
  };

  const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";
  const colors = colorVariants[variant];

  return (
    <div
      className={cn(
        "relative inline-flex transform-gpu rounded-full p-[1.25px] will-change-transform",
        colors.outer,
      )}
      style={{
        transform: isPressed
          ? "translateY(2.5px) scale(0.99)"
          : "translateY(0) scale(1)",
        boxShadow: isPressed
          ? "0 1px 3px rgba(0, 0, 0, 0.2)"
          : "0 5px 15px rgba(0, 0, 0, 0.15)",
        transition: transitionStyle,
        transformOrigin: "center center",
      }}
    >
      <div
        className={cn(
          "absolute inset-[1px] transform-gpu rounded-full will-change-transform",
          colors.inner,
        )}
        style={{
          transition: transitionStyle,
          transformOrigin: "center center",
        }}
      ></div>

      <button
        ref={ref}
        className={cn(
          "relative z-10 m-[2.5px] inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-full p-6 text-2xl leading-none font-bold will-change-transform outline-none",
          colors.button,
          colors.textColor,
          colors.textShadow,
          className,
        )}
        {...buttonProps}
        style={{
          transform: isPressed ? "scale(0.97)" : "scale(1)",
          transition: transitionStyle,
          transformOrigin: "center center",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <ShineEffect />
        {children}
      </button>
    </div>
  );
});

MetalButton.displayName = "MetalButton";`;

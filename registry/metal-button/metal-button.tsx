"use client";
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
    outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner: "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
    button: "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
  },
  primary: {
    outer: "bg-gradient-to-b from-[#0051B4] to-[#90C2FF]",
    inner: "bg-gradient-to-b from-[#C4EBFF] via-[#0B3F89] to-[#A6DDFB]",
    button: "bg-gradient-to-b from-[#96C6EA] to-[#2D7CCA]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]",
  },
  success: {
    outer: "bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",
    inner: "bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",
    button: "bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]",
  },
  error: {
    outer: "bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",
    inner: "bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",
    button: "bg-gradient-to-b from-[#F08D8F] to-[#A45253]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]",
  },
  gold: {
    outer: "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
    inner: "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
    button: "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
    textColor: "text-[#FFFDE5]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]",
  },
  bronze: {
    outer: "bg-gradient-to-b from-[#864813] to-[#E9B486]",
    inner: "bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",
    button: "bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]",
  },
};

export const MetalButton = React.forwardRef<
  HTMLButtonElement,
  MetalButtonProps
>(({ children, className, variant = "default", ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    // Check if device is touch-enabled
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const buttonProps = {
    ...props,
    name: props.name || "button",
  };

  const buttonText = children || "Button";

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
    setIsHovered(false);
    buttonProps.onMouseLeave?.(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
    buttonProps.onMouseEnter?.(e);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    buttonProps.onTouchStart?.(e);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    buttonProps.onTouchEnd?.(e);
  };

  const handleTouchCancel = (e: React.TouchEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    buttonProps.onTouchCancel?.(e);
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
          ? "0 1px 2px rgba(0, 0, 0, 0.15)"
          : isHovered && !isTouchDevice
            ? "0 4px 12px rgba(0, 0, 0, 0.12)"
            : "0 3px 8px rgba(0, 0, 0, 0.08)",
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
          filter:
            isHovered && !isPressed && !isTouchDevice
              ? "brightness(1.05)"
              : "none",
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
          filter:
            isHovered && !isPressed && !isTouchDevice
              ? "brightness(1.02)"
              : "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        <ShineEffect />
        {buttonText}
        {isHovered && !isPressed && !isTouchDevice && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/5" />
        )}
      </button>
    </div>
  );
});

MetalButton.displayName = "MetalButton";

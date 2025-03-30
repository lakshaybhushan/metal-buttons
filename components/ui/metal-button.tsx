"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface MetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const MetalButton = React.forwardRef<
  HTMLButtonElement,
  MetalButtonProps
>(({ children, className, ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    props.onMouseDown?.(e);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    props.onMouseUp?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(false);
    props.onMouseLeave?.(e);
  };

  const ShineEffect = () => {
    return (
      <div
        className={cn(
          "absolute inset-0 rounded-full overflow-hidden transition-opacity duration-300 pointer-events-none z-20",
          isPressed ? "opacity-20" : "opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent"
          style={{
            width: "150%",
            height: "100%",
            transform: `translateX(${isPressed ? "-25%" : "-100%"})`,
            transition: `transform 400ms cubic-bezier(0.1, 0.4, 0.2, 1)`,
          }}
        />
      </div>
    );
  };

  const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";

  return (
    <div
      className={cn(
        "inline-flex rounded-full relative bg-gradient-to-t from-[#A0A0A0] to-[#000] p-[1.25px]",
        "transform-gpu will-change-transform"
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
          "absolute inset-[1px] rounded-full bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
          "transform-gpu will-change-transform"
        )}
        style={{
          transition: transitionStyle,
          transformOrigin: "center center",
        }}
      ></div>

      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold relative z-10 leading-none cursor-pointer outline-none text-[#FFF] bg-linear-to-b from-[#B9B9B9] to-[#969696] h-11 p-6 m-[4px] text-2xl [text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)] overflow-hidden",
          "transform-gpu will-change-transform",
          className
        )}
        {...props}
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

MetalButton.displayName = "MetalButton";

"use client";

import { easeInOut, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

export const GradientBackground = ({
  firstColor = "255, 69, 0", // red-orange
  secondColor = "255, 140, 0", // dark orange
  thirdColor = "255, 99, 71", // tomato
  fourthColor = "178, 34, 34", // firebrick
  fifthColor = "139, 0, 0", // dark red
  pointerColor = "255, 165, 0", // orange for pointer
  size = "50%",
  blendingValue = "hard-light", // changed for better glow effect
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  // Use refs to store animation values instead of state
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const tgXRef = useRef(0);
  const tgYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const [isSafari, setIsSafari] = useState(false);

  const { theme } = useTheme();

  // Set up gradient background colors based on theme
  const gradientBackgroundStart = theme === "dark" ? "#1a0000" : "#000000";
  const gradientBackgroundEnd = theme === "dark" ? "#400000" : "#200000";

  // Set up CSS variables
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  // Set up Safari detection
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Set up animation loop
  useEffect(() => {
    if (!interactive) return;

    function animateMovement() {
      if (!interactiveRef.current) {
        animationFrameRef.current = requestAnimationFrame(animateMovement);
        return;
      }

      // Calculate new position with easing
      curXRef.current =
        curXRef.current + (tgXRef.current - curXRef.current) / 20;
      curYRef.current =
        curYRef.current + (tgYRef.current - curYRef.current) / 20;

      // Apply transform directly to DOM element
      interactiveRef.current.style.transform = `translate(${Math.round(
        curXRef.current
      )}px, ${Math.round(curYRef.current)}px)`;

      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animateMovement);

    // Clean up animation loop on unmount
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  // Handle mouse movement
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;

    const rect = interactiveRef.current.getBoundingClientRect();
    // Update target position directly in ref (no state update)
    tgXRef.current = event.clientX - rect.left;
    tgYRef.current = event.clientY - rect.top;
  };

  return (
    <div
      className={cn(
        "relative top-0 left-0 h-screen w-screen overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* Updated Navbar with proper Link components */}
      <motion.nav
        initial={{ opacity: 0, y: -100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 3.5,
          ease: easeInOut,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-8">
              <Link href="/projects" passHref>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white py-2 rounded-md font-medium tracking-wide hover:bg-white/10 px-12
                  font-mono cursor-pointer text-gradient sm:text-lg md:text-2xl"
                >
                  Projects
                </motion.span>
              </Link>

              <Link href="/contact" passHref>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white py-2 rounded-md font-medium tracking-wide hover:bg-white/10 px-12
                  font-mono cursor-pointer text-gradient font-bold sm:text-lg md:text-2xl"
                >
                  Contact
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Existing SVG and content */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn(className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.6)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `-top-1/2 -left-1/2 h-full w-full [mix-blend-mode:color-dodge]`,
              `opacity-30`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

type HeroLogoProps = {
  className?: string;
  /** light = fondo claro del hero PulseFit; dark = hero azul */
  variant?: "light" | "dark";
};

export function HeroLogo({ className, variant = "light" }: HeroLogoProps) {
  const isLight = variant === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex w-full max-w-sm flex-col items-center text-center sm:max-w-md lg:max-w-lg",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full blur-2xl sm:h-56 sm:w-56",
          isLight
            ? "bg-[radial-gradient(circle,rgba(0,174,239,0.25)_0%,rgba(56,189,248,0.1)_50%,transparent_70%)]"
            : "bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(0,174,239,0.2)_45%,transparent_70%)]"
        )}
        aria-hidden
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className={cn(
          "relative mb-6 rounded-full p-5 shadow-lg sm:mb-8 sm:p-6",
          isLight
            ? "bg-white ring-2 ring-primary/20 shadow-primary/10"
            : "bg-white/20 ring-2 ring-white/40 backdrop-blur-sm"
        )}
      >
        <Image
          src={IMAGES.logoIcon}
          alt=""
          width={220}
          height={220}
          quality={100}
          priority
          className="h-32 w-32 object-contain sm:h-40 sm:w-40 lg:h-44 lg:w-44"
        />
      </motion.div>

      <h2
        className={cn(
          "text-2xl font-bold tracking-wide sm:text-3xl lg:text-4xl",
          isLight ? "text-[#0a192f]" : "text-white drop-shadow-md"
        )}
      >
        HIDROGONZA S.A.S
      </h2>
      <p
        className={cn(
          "mt-2 text-xs font-semibold tracking-[0.22em] sm:text-sm lg:text-base",
          isLight ? "text-primary" : "text-sky-100"
        )}
      >
        SOLUCIONES AL INSTANTE
      </p>
    </motion.div>
  );
}

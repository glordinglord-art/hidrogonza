"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

type HeroLogoProps = {
  className?: string;
};

/** Ícono PNG transparente + texto — siempre legible sobre el hero azul */
export function HeroLogo({ className }: HeroLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex w-full max-w-sm flex-col items-center text-center sm:max-w-md lg:max-w-lg",
        className
      )}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(0,174,239,0.2)_45%,transparent_70%)] blur-2xl sm:h-56 sm:w-56"
        aria-hidden
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative mb-6 rounded-full bg-white/20 p-5 shadow-[0_16px_48px_rgba(0,0,0,0.2)] ring-2 ring-white/40 backdrop-blur-sm sm:mb-8 sm:p-6"
      >
        <Image
          src={IMAGES.logoIcon}
          alt=""
          width={220}
          height={220}
          quality={100}
          priority
          className="h-32 w-32 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:h-40 sm:w-40 lg:h-44 lg:w-44"
        />
      </motion.div>

      <h2 className="text-2xl font-bold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-3xl lg:text-4xl">
        HIDROGONZA S.A.S
      </h2>
      <p className="mt-2 text-xs font-semibold tracking-[0.22em] text-sky-100 sm:text-sm lg:text-base">
        SOLUCIONES AL INSTANTE
      </p>
    </motion.div>
  );
}

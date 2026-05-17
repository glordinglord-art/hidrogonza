"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProgramCard {
  image: string;
  category: string;
  title: string;
  href?: string;
}

interface PulseFitHeroProps {
  /** Ocultar cabecera interna (el sitio ya usa Header global) */
  hideHeader?: boolean;
  title: string;
  subtitle: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  programs?: ProgramCard[];
  className?: string;
  children?: React.ReactNode;
}

export function PulseFitHero({
  hideHeader = true,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  programs = [],
  className,
  children,
}: PulseFitHeroProps) {
  const loopWidth = programs.length * 380;

  return (
    <section
      className={cn(
        "relative flex w-full min-h-[calc(100vh-5rem)] flex-col overflow-hidden pt-2 md:pt-4",
        className
      )}
      style={{
        background:
          "linear-gradient(180deg, #dbeafe 0%, #e0f2fe 35%, #f0f9ff 70%, #ffffff 100%)",
      }}
      role="banner"
      aria-label="Hero principal"
    >
      {!hideHeader && (
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 px-8 py-8 lg:px-16"
        />
      )}

      <div className="relative z-10 flex flex-1 flex-col justify-start pt-3 md:pt-5 lg:pt-7">
        {children ?? (
          <div className="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-slate-600"
            >
              {subtitle}
            </motion.p>
          </div>
        )}
      </div>

      {programs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 w-full overflow-hidden pb-12 pt-8 md:pb-16 md:pt-10"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent md:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-36" />

          <motion.div
            className="flex items-center gap-6 pl-6"
            animate={{ x: [0, -loopWidth / 2] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: Math.max(programs.length * 4, 12),
                ease: "linear",
              },
            }}
          >
            {[...programs, ...programs].map((program, index) => {
              const card = (
                <motion.div
                  whileHover={{ scale: 1.04, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-[420px] w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] sm:h-[460px] sm:w-[356px]"
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="356px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
                    <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                      {program.category}
                    </span>
                    <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                      {program.title}
                    </h3>
                  </div>
                </motion.div>
              );

              return program.href ? (
                <Link key={`${program.title}-${index}`} href={program.href}>
                  {card}
                </Link>
              ) : (
                <div key={`${program.title}-${index}`}>{card}</div>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

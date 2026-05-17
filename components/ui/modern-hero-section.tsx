"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/20",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -120,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 18, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border border-white/25 backdrop-blur-md",
            "shadow-[0_8px_40px_rgba(56,189,248,0.25)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_65%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/** Capa animada de fondo (formas + gradientes) para el hero de Hidrogonza */
export function HeroGeometricBackground({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {/* Base: azul más vivo, menos “bloque oscuro” */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a7a9e] via-[#0f5c7a] to-[#0c3d5c]" />

      {/* Orbes de luz (mesh) */}
      <div className="absolute -left-[20%] top-[10%] h-[55%] w-[55%] rounded-full bg-[#38bdf8]/30 blur-[100px]" />
      <div className="absolute -right-[15%] top-[20%] h-[50%] w-[45%] rounded-full bg-[#00aeef]/25 blur-[90px]" />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[40%] w-[40%] rounded-full bg-cyan-300/20 blur-[80px]"
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9]/15 via-transparent to-[#0369a1]/20" />

      {/* Formas flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-90">
        <ElegantShape
          delay={0.3}
          width={620}
          height={150}
          rotate={12}
          gradient="from-white/30"
          className="left-[-12%] top-[12%] md:left-[-6%] md:top-[18%]"
        />
        <ElegantShape
          delay={0.5}
          width={480}
          height={130}
          rotate={-15}
          gradient="from-[#7dd3fc]/40"
          className="right-[-8%] top-[65%] md:right-[-2%] md:top-[72%]"
        />
        <ElegantShape
          delay={0.4}
          width={320}
          height={90}
          rotate={-8}
          gradient="from-[#00aeef]/35"
          className="bottom-[8%] left-[8%] md:bottom-[12%] md:left-[12%]"
        />
        <ElegantShape
          delay={0.6}
          width={220}
          height={70}
          rotate={20}
          gradient="from-white/25"
          className="right-[12%] top-[8%] md:right-[18%] md:top-[12%]"
        />
        <ElegantShape
          delay={0.7}
          width={160}
          height={50}
          rotate={-25}
          gradient="from-cyan-200/30"
          className="left-[18%] top-[4%] md:left-[22%] md:top-[8%]"
        />
      </div>

      {/* Viñeta suave (no tapar todo de negro) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c3d5c]/80 via-[#0f5c7a]/20 to-[#1a7a9e]/10" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(255,255,255,0.08),transparent)]" />
    </motion.div>
  );
}

export default function HeroGeometric({
  badge = "Soluciones al Instante",
  title1 = "Especialistas en redes",
  title2 = "hidrosanitarias",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <motion.div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <HeroGeometricBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 backdrop-blur-md md:mb-12"
          >
            <span className="text-sm tracking-wide text-white/90">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:mb-8 md:text-8xl">
              <span className="bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent drop-shadow-sm">
                {title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#e0f7ff] via-[#7dd3fc] to-[#00aeef] bg-clip-text text-transparent">
                {title2}
              </span>
            </h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

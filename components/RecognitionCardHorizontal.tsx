"use client";

import { motion } from "framer-motion";
import { ExpandableImage } from "@/components/ExpandableImage";
import type { Recognition } from "@/constants/credentials";
import { cn } from "@/lib/utils";

type RecognitionCardHorizontalProps = {
  item: Recognition;
  className?: string;
  variants?: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
};

export function RecognitionCardHorizontal({ item, className, variants }: RecognitionCardHorizontalProps) {
  return (
    <motion.article
      variants={variants}
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative bg-slate-100 px-2 py-2 sm:px-3 sm:py-3">
        <ExpandableImage
          src={item.image}
          alt={item.alt}
          caption={`${item.title} (${item.year})`}
          priority={item.id === "mujeres-capital-certificado-2025"}
          layout="landscape"
          lightboxTight
          className="rounded-xl"
        />
        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow sm:left-5 sm:top-5">
          {item.year}
        </span>
      </div>

      <div className="border-t border-slate-100 px-5 py-5 text-center sm:px-8 sm:py-6">
        <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          Constructora Capital
        </span>
        <h3 className="mt-3 text-xl font-bold text-[#0a192f] sm:text-2xl">{item.title}</h3>
        <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

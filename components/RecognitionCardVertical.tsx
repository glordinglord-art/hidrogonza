"use client";

import { motion } from "framer-motion";
import { ExpandableImage } from "@/components/ExpandableImage";
import type { Recognition } from "@/constants/credentials";
import { cn } from "@/lib/utils";

type RecognitionCardVerticalProps = {
  item: Recognition;
  className?: string;
  variants?: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
};

export function RecognitionCardVertical({ item, className, variants }: RecognitionCardVerticalProps) {
  return (
    <motion.article
      variants={variants}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="relative bg-slate-50 p-3 sm:p-4">
        <ExpandableImage
          src={item.image}
          alt={item.alt}
          caption={`${item.title} (${item.year})`}
          sizes="(max-width: 768px) 100vw, 360px"
          priority={item.id === "contratista-ganador-2025"}
          aspectClassName="relative aspect-[4/5] max-h-[280px] w-full sm:max-h-[300px]"
          className="rounded-xl"
        />
        <span className="pointer-events-none absolute left-6 top-6 z-10 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">
          {item.year}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
      </div>
    </motion.article>
  );
}

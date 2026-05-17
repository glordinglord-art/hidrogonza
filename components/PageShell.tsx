"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ title, description, children, className }: PageShellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("mx-auto max-w-7xl bg-white px-4 pb-16 pt-24 sm:px-6 lg:px-8", className)}
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mb-10 text-center md:mb-14"
      >
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{description}</p>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 h-1 w-24 origin-center rounded-full bg-primary"
        />
      </motion.div>
      {children}
    </motion.div>
  );
}

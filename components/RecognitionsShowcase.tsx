"use client";

import { motion } from "framer-motion";
import { RECOGNITIONS } from "@/constants/credentials";
import { RecognitionCardHorizontal } from "@/components/RecognitionCardHorizontal";
import { RecognitionCardVertical } from "@/components/RecognitionCardVertical";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

type RecognitionsShowcaseProps = {
  className?: string;
};

export function RecognitionsShowcase({ className }: RecognitionsShowcaseProps) {
  const horizontal = RECOGNITIONS.filter((item) => item.orientation === "horizontal");
  const vertical = RECOGNITIONS.filter((item) => item.orientation === "vertical");

  return (
    <div className={className}>
      {horizontal.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mx-auto w-full max-w-6xl space-y-8"
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Certificados
          </p>
          {horizontal.map((item) => (
            <RecognitionCardHorizontal key={item.id} item={item} variants={fadeUp} />
          ))}
        </motion.div>
      )}

      {vertical.length > 0 && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className={horizontal.length > 0 ? "mx-auto mt-12 max-w-6xl space-y-6" : "mx-auto max-w-6xl space-y-6"}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trofeos y placas
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vertical.map((item) => (
              <RecognitionCardVertical key={item.id} item={item} variants={fadeUp} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

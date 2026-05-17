"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { RECOGNITIONS } from "@/constants/credentials";
import { ImageGallery } from "@/components/ImageGallery";
import { cn } from "@/lib/utils";

type RecognitionsSectionProps = { embedded?: boolean };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function RecognitionsSection({ embedded }: RecognitionsSectionProps) {
  const galleryItems = RECOGNITIONS.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image,
    alt: item.alt,
    badge: item.year,
  }));

  return (
    <section className={cn(embedded ? "bg-white" : "bg-white py-24")}>
      <div className={cn(embedded ? "space-y-14" : "mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8")}>
        {!embedded && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Reconocimientos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Distinciones otorgadas por constructoras por cumplimiento, gestión y desempeño en obra.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
          </div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
        >
          {RECOGNITIONS.map((rec) => (
            <motion.div
              key={rec.year}
              variants={fadeUp}
              className="flex items-start gap-5 rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50/80 to-white p-6 shadow-sm"
            >
              <div className="shrink-0 rounded-2xl bg-amber-50 p-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {rec.year}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{rec.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{rec.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8 text-center"
          >
            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">Documentos y menciones</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600">
              Galería de reconocimientos recibidos en proyectos con Constructora Capital.
            </p>
          </motion.div>
          <ImageGallery items={galleryItems} />
        </div>
      </div>
    </section>
  );
}

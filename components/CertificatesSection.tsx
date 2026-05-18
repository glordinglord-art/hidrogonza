"use client";

import { motion } from "framer-motion";
import { ExpandableImage } from "@/components/ExpandableImage";
import { Award, Calendar, FileCheck, MapPin } from "lucide-react";
import { CERTIFICATES } from "@/constants/credentials";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const highlightIcons = [Award, MapPin, Calendar] as const;

export function CertificatesSection() {
  const cert = CERTIFICATES[0];
  if (!cert) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      className="space-y-10"
    >
      <motion.div variants={fadeUp} className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-4 ring-primary/5">
          <FileCheck className="h-7 w-7 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-[#0a192f] md:text-3xl">Certificados</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Formación técnica especializada que respalda la calidad de nuestro trabajo en obra.
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
      </motion.div>

      <motion.article
        variants={fadeUp}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white to-primary/5"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#0a192f]/5 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:p-10">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute -inset-3 rounded-[1.35rem] bg-gradient-to-br from-primary/20 via-sky-100/50 to-[#0a192f]/10"
                aria-hidden
              />
              <ExpandableImage
                src={cert.image}
                alt={cert.alt}
                caption={cert.title}
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
                aspectClassName="relative aspect-[4/5] w-full"
                className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-200/90"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0a192f] shadow-sm">
                Documento original
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary lg:mx-0">
              <Award className="h-3.5 w-3.5" />
              {cert.subtitle}
            </span>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-[#0a192f] sm:text-3xl">
              {cert.title}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-slate-600">{cert.description}</p>

            <ul className="mt-8 space-y-3">
              {cert.highlights.map((item, index) => {
                const Icon = highlightIcons[index] ?? Award;
                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white/80 px-4 py-3 text-left shadow-sm backdrop-blur-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-slate-800">{item.value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

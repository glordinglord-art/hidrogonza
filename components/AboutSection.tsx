"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
} from "lucide-react";
import {
  ABOUT_PILLARS,
  COMPANY_INTRO,
  COMPANY_STATS,
  LEADERSHIP,
  TIMELINE,
} from "@/constants/about";
import { CertificatesSection } from "@/components/CertificatesSection";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const pillarIcons = [Target, Eye, ShieldCheck] as const;

type AboutSectionProps = { embedded?: boolean };

export function AboutSection({ embedded }: AboutSectionProps) {
  return (
    <section className={cn(embedded ? "bg-white" : "bg-white pb-8")}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className={cn(embedded ? "space-y-20" : "space-y-24")}
      >
        {/* Intro + stats */}
        <div className="space-y-10">
          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-600"
          >
            {COMPANY_INTRO}
          </motion.p>

          <motion.div
            variants={stagger}
            className="grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {COMPANY_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Liderazgo */}
        <motion.div
          variants={fadeUp}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0a192f] via-[#0c2340] to-[#0f4c6e] text-white shadow-xl"
        >
          <div className="grid gap-0 lg:grid-cols-5">
            <div className="relative flex flex-col items-center justify-center overflow-hidden bg-white/5 p-10 lg:col-span-2">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/20 blur-2xl"
                aria-hidden
              />
              <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-2xl bg-white/10 shadow-xl ring-4 ring-primary/40 sm:w-48">
                <Image
                  src={LEADERSHIP.photo}
                  alt={LEADERSHIP.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 176px, 192px"
                  priority
                />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-sky-200">
                {LEADERSHIP.role}
              </p>
              <h3 className="mt-2 text-center text-2xl font-bold">{LEADERSHIP.name}</h3>
              <p className="mt-1 text-center text-sm text-slate-300">{LEADERSHIP.company}</p>
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
              <p className="text-lg leading-relaxed text-slate-100">{LEADERSHIP.bio}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {LEADERSHIP.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Línea de tiempo */}
        <div>
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Nuestra trayectoria</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Hitos que reflejan nuestro crecimiento, cumplimiento y relación con clientes y aliados.
            </p>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <div className="relative mx-auto max-w-3xl">
            <div
              className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:-translate-x-px"
              aria-hidden
            />
            <div className="space-y-10">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year + item.title}
                  variants={fadeUp}
                  className={cn(
                    "relative flex flex-col gap-4 md:flex-row md:items-center",
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  )}
                >
                  <div
                    className={cn(
                      "flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    )}
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                  <div
                    className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-primary shadow-md md:left-1/2"
                    aria-hidden
                  >
                    {index === TIMELINE.length - 1 ? (
                      <Building2 className="h-5 w-5 text-white" />
                    ) : (
                      <Award className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Misión, visión, calidad */}
        <div>
          <motion.div variants={fadeUp} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Lo que nos guía</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid gap-6 md:grid-cols-3"
          >
            {ABOUT_PILLARS.map((item, i) => {
              const Icon = pillarIcons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-slate-600">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <CertificatesSection />
      </motion.div>
    </section>
  );
}

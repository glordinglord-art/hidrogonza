"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, MapPin, X, CheckCircle2, Wrench } from "lucide-react";
import type { Project, ProjectMaterial } from "@/constants/projects";
import { cn } from "@/lib/utils";

const PARTNER_LOGO_BOX: Record<NonNullable<ProjectMaterial["partnerLogoStyle"]>, string> = {
  yellow: "border-amber-200/70 bg-gradient-to-br from-amber-50 to-[#FFD100]/30",
  light: "border-slate-200/90 bg-gradient-to-br from-white to-slate-50",
  blue: "border-sky-200/60 bg-gradient-to-br from-sky-50 to-primary/10",
  dark: "border-slate-800/40 bg-gradient-to-br from-slate-900 to-black",
};

function partnerLogoBoxClass(style?: ProjectMaterial["partnerLogoStyle"]) {
  return PARTNER_LOGO_BOX[style ?? "yellow"];
}

const CATEGORY_LABEL: Record<Project["category"], string> = {
  gas: "Gas natural",
  incendio: "Contra incendio",
  hidraulica: "Hidráulica",
  desagues: "Desagües",
  mixto: "Instalaciones mixtas",
};

type ProjectDetailDialogProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectDetailDialog({ project, onClose }: ProjectDetailDialogProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={project.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[200] flex items-end justify-center bg-[#0a192f]/75 p-0 backdrop-blur-md sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "relative flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[88dvh] sm:rounded-3xl",
              "mt-[5.25rem] sm:mt-0"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-[#0a192f] shadow-md transition-transform hover:scale-105"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-52 shrink-0 sm:h-64">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="mb-2 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                  {CATEGORY_LABEL[project.category]}
                </span>
                <h2 className="text-xl font-bold text-white sm:text-2xl">{project.name}</h2>
                <p className="mt-1 text-sm text-white/85">{project.tagline}</p>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.clientLogo ? (
                  <div className="flex min-h-[9rem] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 px-5 py-5 shadow-sm sm:min-h-[9.5rem]">
                    <div className="flex min-h-[6.5rem] flex-1 items-center justify-center sm:min-h-[7rem]">
                      <Image
                        src={project.clientLogo}
                        alt={project.client}
                        width={project.clientLogoSquare ? 200 : 400}
                        height={project.clientLogoSquare ? 200 : 120}
                        className={cn(
                          "h-auto w-full object-contain object-center",
                          project.clientLogoSquare
                            ? "max-h-[5.5rem] max-w-[5.5rem] sm:max-h-[6.25rem] sm:max-w-[6.25rem]"
                            : "max-h-[4.5rem] max-w-[16rem] sm:max-h-[5rem] sm:max-w-[18rem]"
                        )}
                      />
                    </div>
                    {!project.clientLogoSquare && (
                      <p className="mt-3 text-center text-xs font-medium text-slate-500">{project.client}</p>
                    )}
                  </div>
                ) : (
                  <div className="flex min-h-[7.5rem] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5">
                    <Building2 className="mb-2 h-8 w-8 text-primary" />
                    <p className="text-center text-sm font-semibold text-slate-800">{project.client}</p>
                  </div>
                )}
                <div className="flex min-h-[7.5rem] flex-col justify-center rounded-2xl border border-primary/15 bg-primary/5 px-5 py-5 shadow-sm">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">Ubicación</p>
                  <p className="flex items-start gap-2 text-base font-semibold leading-snug text-[#0a192f] sm:text-lg">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {project.location}
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700 sm:text-lg">{project.description}</p>

              <div className="mt-6">
                <h3 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#0a192f]">
                  <Wrench className="h-4 w-4 text-primary" />
                  Alcance del trabajo
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project.materials && project.materials.length > 0 && (
                <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 p-4 sm:p-5">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#0a192f]">
                    Aliados y materiales
                  </h3>
                  <ul
                    className={cn(
                      "grid gap-4",
                      project.materials.length > 1 && "sm:grid-cols-2",
                      project.materials.length >= 3 && "lg:grid-cols-3"
                    )}
                  >
                    {project.materials.map((mat) => (
                      <li
                        key={mat.label}
                        className="flex flex-col rounded-2xl border border-white/80 bg-white/95 p-4 shadow-sm"
                      >
                        <p className="text-sm font-semibold leading-snug text-slate-800">{mat.label}</p>
                        {mat.partner && (
                          <p className="mt-1 text-xs font-medium text-primary">{mat.partner}</p>
                        )}
                        {mat.partnerLogo && (
                          <div
                            className={cn(
                              "mt-4 flex min-h-[5.5rem] items-center justify-center rounded-xl border px-4 py-4 shadow-inner",
                              partnerLogoBoxClass(mat.partnerLogoStyle)
                            )}
                          >
                            <Image
                              src={mat.partnerLogo}
                              alt={mat.partner ?? "Aliado"}
                              width={200}
                              height={80}
                              className="h-auto max-h-12 w-full max-w-[10.5rem] object-contain object-center sm:max-h-14 sm:max-w-[12rem]"
                            />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

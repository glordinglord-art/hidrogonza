"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Fuel, Flame, Droplets, Waves, Layers } from "lucide-react";
import type { Project } from "@/constants/projects";
import { cn } from "@/lib/utils";

const CATEGORY_ICON = {
  gas: Fuel,
  incendio: Flame,
  hidraulica: Droplets,
  desagues: Waves,
  mixto: Layers,
} as const;

const CATEGORY_LABEL = {
  gas: "Gas natural",
  incendio: "Contra incendio",
  hidraulica: "Hidráulica",
  desagues: "Desagües",
  mixto: "Mixto",
} as const;

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  index?: number;
  onSelect: (project: Project) => void;
};

export function ProjectCard({ project, featured, index = 0, onSelect }: ProjectCardProps) {
  const Icon = CATEGORY_ICON[project.category];

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onSelect(project)}
      className={cn(
        "group relative block w-full overflow-hidden rounded-3xl text-left shadow-md ring-1 ring-slate-200/80 transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        featured ? "min-h-[320px] md:min-h-[400px]" : "aspect-[4/5] min-h-[300px] sm:aspect-auto sm:min-h-[280px]"
      )}
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/50 to-[#0a192f]/10 opacity-95 transition-opacity group-hover:opacity-100" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg">
          <Icon className="h-4 w-4" />
        </span>
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {CATEGORY_LABEL[project.category]}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-primary sm:text-sm">{project.client}</p>
        <h3
          className={cn(
            "mt-1 font-bold leading-tight text-white",
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          )}
        >
          {project.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/80 sm:text-base">{project.summary}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1 text-xs text-white/70 sm:text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
            {project.location}
          </span>
          <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition-colors group-hover:bg-primary">
            Ver detalle
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>

      {featured && (
        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0a192f] shadow-md">
          Destacado
        </span>
      )}
    </motion.button>
  );
}

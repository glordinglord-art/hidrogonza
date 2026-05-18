"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, FEATURED_PROJECT } from "@/constants/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetailDialog } from "@/components/projects/ProjectDetailDialog";
import type { Project } from "@/constants/projects";
import { Button } from "@/components/ui/button";

type ProjectsSectionProps = { embedded?: boolean };

export function ProjectsSection({ embedded }: ProjectsSectionProps) {
  const [selected, setSelected] = useState<Project | null>(null);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <section id="proyectos" className={embedded ? "bg-white" : "bg-gradient-to-b from-slate-50 to-white py-20 md:py-28"}>
      <motion.div
        className={embedded ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {!embedded && (
          <div className="mb-14 text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Portafolio
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a192f] md:text-5xl">Proyectos realizados</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Obras con constructoras líderes. Clic en cada proyecto para ver alcance, materiales y detalles técnicos.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
          </div>
        )}

        {embedded && (
          <p className="mb-10 max-w-2xl text-center text-slate-600 md:mx-auto md:text-lg">
            Clic en un proyecto para ver el alcance de la obra, materiales utilizados y aliados proveedores.
          </p>
        )}

        <div className="mb-10">
          <ProjectCard
            project={FEATURED_PROJECT}
            featured
            index={0}
            onSelect={setSelected}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index + 1} onSelect={setSelected} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 px-8 hover:bg-primary/5">
            <Link href="/reconocimientos">
              Ver reconocimientos
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <ProjectDetailDialog project={selected} onClose={close} />
    </section>
  );
}

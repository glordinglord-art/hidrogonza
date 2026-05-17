import { ProjectsSection } from "@/components/ProjectsSection";
import { PageShell } from "@/components/PageShell";

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Proyectos realizados"
        description="Obras destacadas con las principales constructoras del país."
      >
        <ProjectsSection embedded />
      </PageShell>
    </div>
  );
}

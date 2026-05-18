import { ProjectsSection } from "@/components/ProjectsSection";
import { PageShell } from "@/components/PageShell";

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Proyectos realizados"
        description="Obras con Constructora Capital, Optima Construcciones y Total Urbe. Clic en cada proyecto para ver alcance y materiales."
      >
        <ProjectsSection embedded />
      </PageShell>
    </div>
  );
}

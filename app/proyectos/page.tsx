import { ProjectsSection } from "@/components/ProjectsSection";
import { PageShell } from "@/components/PageShell";

type ProyectosPageProps = {
  searchParams: Promise<{ proyecto?: string }>;
};

export default async function ProyectosPage({ searchParams }: ProyectosPageProps) {
  const { proyecto } = await searchParams;

  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Proyectos realizados"
        description="Obras con Constructora Capital, Optima Construcciones y Total Urbe. Clic en cada proyecto para ver alcance y materiales."
      >
        <ProjectsSection embedded initialProjectId={proyecto ?? null} />
      </PageShell>
    </div>
  );
}

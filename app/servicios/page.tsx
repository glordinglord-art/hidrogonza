import { ServicesSection } from "@/components/ServicesSection";
import { PageShell } from "@/components/PageShell";

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Nuestros servicios"
        description="Soluciones integrales con normatividad vigente y equipos certificados."
      >
        <ServicesSection embedded />
      </PageShell>
    </div>
  );
}

import { PartnersSection } from "@/components/PartnersSection";
import { PageShell } from "@/components/PageShell";

export default function AliadosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Aliados y proveedores"
        description="Trabajamos con las mejores marcas para garantizar calidad en cada proyecto."
      >
        <PartnersSection embedded />
      </PageShell>
    </div>
  );
}

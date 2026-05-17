import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/PageShell";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="¿Quiénes somos?"
        description="Empresa especializada en instalaciones hidrosanitarias, gas y sistemas contra incendio."
      >
        <AboutSection embedded />
      </PageShell>
    </div>
  );
}

import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/PageShell";

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Nosotros"
        description="Conoce a Hidrogonza S.A.S.: trayectoria, liderazgo y el compromiso que nos define en cada proyecto."
      >
        <AboutSection embedded />
      </PageShell>
    </div>
  );
}

import { RecognitionsSection } from "@/components/RecognitionsSection";
import { PageShell } from "@/components/PageShell";

export default function ReconocimientosPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageShell
        title="Reconocimientos"
        description="Distinciones y menciones por cumplimiento en obra y gestión de calidad."
      >
        <RecognitionsSection embedded />
      </PageShell>
    </div>
  );
}

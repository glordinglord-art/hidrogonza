"use client";

import { RecognitionsShowcase } from "@/components/RecognitionsShowcase";
import { cn } from "@/lib/utils";

type RecognitionsSectionProps = { embedded?: boolean };

export function RecognitionsSection({ embedded }: RecognitionsSectionProps) {
  return (
    <section className={cn(embedded ? "bg-white" : "bg-white py-24")}>
      <div className={cn(embedded ? "space-y-10" : "mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8")}>
        {!embedded && (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Reconocimientos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Distinciones otorgadas por constructoras por cumplimiento, gestión y desempeño en obra.
            </p>
            <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary" />
          </div>
        )}

        <RecognitionsShowcase />
      </div>
    </section>
  );
}

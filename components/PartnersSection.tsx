import Image from "next/image";
import { PARTNERS, type Partner } from "@/constants/content";
import { getPartnerLogoProps, partnerLogoAreaStyles } from "@/lib/partner-logo";
import { cn } from "@/lib/utils";

type PartnersSectionProps = { embedded?: boolean };

export function PartnersSection({ embedded }: PartnersSectionProps) {
  const withLogo = PARTNERS.filter((p) => p.logo);
  const textOnly = PARTNERS.filter((p) => !p.logo);

  return (
    <section className={embedded ? "bg-white" : "bg-white py-24"}>
      <div className={embedded ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {!embedded && (
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">Aliados y proveedores</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              Trabajamos con las mejores marcas del mercado para garantizar calidad y durabilidad.
            </p>
          </div>
        )}

        {withLogo.length > 0 && (
          <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {withLogo.map((partner) => (
              <PartnerLogoCard key={partner.name} partner={partner} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {textOnly.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-semibold text-slate-700 shadow-sm transition-all hover:border-primary/40 hover:text-primary hover:shadow-md"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerLogoCard({ partner }: { partner: Partner }) {
  const style = partner.logoStyle ?? "yellow";
  const imageProps = getPartnerLogoProps(partner, "card");

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div
        className={cn(
          "relative flex items-center justify-center px-6 py-8",
          partnerLogoAreaStyles[style],
          imageProps.minH
        )}
      >
        <Image
          src={partner.logo!}
          alt={`${partner.name}${partner.tagline ? ` - ${partner.tagline}` : ""}`}
          width={imageProps.w}
          height={imageProps.h}
          quality={95}
          className={cn("h-auto w-full object-contain", imageProps.img)}
          sizes="(max-width: 768px) 90vw, 480px"
        />
      </div>
      <div className="border-t border-slate-100 bg-white px-5 py-4 text-center">
        <p className="font-bold text-slate-900">{partner.name}</p>
        {partner.tagline && (
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
            {partner.tagline}
          </p>
        )}
        {partner.badge && (
          <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {partner.badge}
          </span>
        )}
      </div>
    </article>
  );
}

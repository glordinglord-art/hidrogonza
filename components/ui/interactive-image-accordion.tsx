"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import {
  HOME_FEATURED_PARTNERS,
  type Partner,
} from "@/constants/content";
import { partnerLogoAreaStyles } from "@/lib/partner-logo";
import { cn } from "@/lib/utils";

export type InteractiveAccordionItem = {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt?: string;
  panelClassName?: string;
  fullBleed?: boolean;
};

type AccordionItemProps = {
  item: InteractiveAccordionItem;
  isActive: boolean;
  onActivate: () => void;
  compact?: boolean;
};

function AccordionPanel({ item, isActive, onActivate, compact = true }: AccordionItemProps) {
  return (
    <button  
      type="button"
      aria-expanded={isActive}
      aria-label={item.title}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={cn(
        "relative shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 text-left shadow-sm transition-all duration-700 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        compact ? "h-[300px] sm:h-[360px] md:h-[400px]" : "h-[450px]",
        isActive
          ? compact
            ? "w-[min(70vw,260px)] sm:w-[280px] md:w-[300px]"
            : "w-[400px]"
          : compact
            ? "w-[40px] sm:w-[48px]"
            : "w-[60px]"
      )}
    >
      {item.fullBleed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.imageUrl}
          alt={item.imageAlt ?? item.title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src =
              "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop";
          }}
        />
      ) : (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center p-3 sm:p-4",
            item.panelClassName ?? "bg-slate-100"
          )}
        >
          <Image
            src={item.imageUrl}
            alt={item.imageAlt ?? item.title}
            width={320}
            height={120}
            className="max-h-[70%] max-w-[92%] object-contain"
            sizes="300px"
          />
        </div>
      )}

      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 transition-colors duration-500",
          item.fullBleed ? "bg-black/40" : isActive ? "bg-black/25" : "bg-black/15"
        )}
      />

      <span
        className={cn(
          "absolute text-sm font-semibold text-white transition-all duration-300 ease-in-out sm:text-base",
          isActive
            ? "bottom-4 left-1/2 max-w-[90%] -translate-x-1/2 rotate-0 truncate text-center"
            : "bottom-20 left-1/2 w-max max-w-none -translate-x-1/2 rotate-90 whitespace-nowrap"
        )}
      >
        {item.title}
      </span>
    </button>
  );
}

export type InteractiveImageAccordionProps = {
  items: InteractiveAccordionItem[];
  defaultActiveIndex?: number;
  compact?: boolean;
  className?: string;
};

export function InteractiveImageAccordion({
  items,
  defaultActiveIndex = 0,
  compact = true,
  className,
}: InteractiveImageAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleActivate = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-row items-center justify-start gap-2 overflow-x-auto pb-2 sm:justify-center sm:gap-3",
        className
      )}
    >
      {items.map((item, index) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onActivate={() => handleActivate(index)}
          compact={compact}
        />
      ))}
    </div>
  );
}

function partnersToAccordionItems(partners: Partner[]): InteractiveAccordionItem[] {
  return partners.map((partner) => ({
    id: partner.name,
    title: partner.name,
    imageUrl: partner.logo ?? "",
    imageAlt: `Logo ${partner.name}`,
    panelClassName: partnerLogoAreaStyles[partner.logoStyle ?? "yellow"],
    fullBleed: false,
  }));
}

export type PartnersImageAccordionSectionProps = {
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  partners?: Partner[];
  className?: string;
};

export function PartnersImageAccordionSection({
  title = "Aliados y proveedores",
  description = "Marcas líderes en acero, tuberías e ingeniería con las que garantizamos calidad en cada instalación.",
  ctaHref = "/aliados",
  ctaLabel = "Ver más",
  partners = HOME_FEATURED_PARTNERS,
  className,
}: PartnersImageAccordionSectionProps) {
  const items = useMemo(() => partnersToAccordionItems(partners), [partners]);

  const defaultActive = Math.min(2, Math.max(0, items.length - 1));

  return (
    <section className={cn("border-y border-slate-200 bg-slate-50 py-12 md:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-stretch justify-between gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full text-center lg:w-[38%] lg:text-left">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Red de suministro
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 lg:mx-0">{description}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">
              Pase el cursor o toque para ver cada marca
            </p>
            <Link
              href={ctaHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#0a192f] px-7 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#0a192f]/90 sm:text-base"
            >
              {ctaLabel}
            </Link>
          </div>

          <div className="w-full min-w-0 lg:w-[62%]">
            <InteractiveImageAccordion
              items={items}
              defaultActiveIndex={defaultActive}
              compact
            />
          </div>
        </div>
      </div>
    </section>
  );
}

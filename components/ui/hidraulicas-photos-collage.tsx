"use client";

import { ExpandableImage } from "@/components/ExpandableImage";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

const PHOTOS = IMAGES.services.hidraulicasGallery;

/** Techo + agua arriba; zanja abajo a todo el ancho (mejor para fotos horizontales) */
const DESKTOP_LAYOUT = [
  { src: 0, className: "col-span-7 row-span-4 col-start-1 row-start-1", imageClassName: "object-cover object-center" },
  {
    src: 2,
    className: "col-span-5 row-span-4 col-start-8 row-start-1",
    imageClassName: "object-cover object-[center_35%]",
  },
  { src: 1, className: "col-span-12 row-span-2 col-start-1 row-start-5", imageClassName: "object-cover object-center" },
] as const;

const MOBILE_ORDER = [0, 2, 1] as const;

const ALT_LABELS = [
  "Red hidráulica en techo — tuberías",
  "Obra en zanja — unión de tubería",
  "Agua potable — suministro",
] as const;

type CollageCellProps = {
  src: string;
  alt: string;
  imageClassName: string;
  className?: string;
};

function CollageCell({ src, alt, imageClassName, className }: CollageCellProps) {
  return (
    <div
      className={cn(
        "relative h-full min-h-0 w-full overflow-hidden rounded-sm bg-neutral-900 sm:rounded-md",
        className
      )}
    >
      <ExpandableImage
        src={src}
        alt={alt}
        caption={alt}
        layout="collage"
        fit={imageClassName.includes("contain") ? "contain" : "cover"}
        lightboxTight
        openOn="click"
        priority
        className="relative block h-full w-full"
        imageClassName={imageClassName}
      />
    </div>
  );
}

type HidraulicasPhotosCollageProps = {
  className?: string;
};

export function HidraulicasPhotosCollage({ className }: HidraulicasPhotosCollageProps) {
  return (
    <div className={cn("absolute inset-0 z-[1] overflow-hidden bg-neutral-900", className)}>
      <div className="flex h-full flex-col gap-1.5 p-1.5 md:hidden">
        {MOBILE_ORDER.map((photoIndex) => (
          <CollageCell
            key={PHOTOS[photoIndex]}
            src={PHOTOS[photoIndex]}
            alt={ALT_LABELS[photoIndex]}
            imageClassName="object-cover object-center"
            className="min-h-0 flex-1"
          />
        ))}
      </div>

      <div className="hidden h-full grid-cols-12 grid-rows-6 gap-1.5 p-1.5 sm:gap-2 sm:p-2 md:grid">
        {DESKTOP_LAYOUT.map(({ src, className: cell, imageClassName }) => (
          <CollageCell
            key={PHOTOS[src]}
            src={PHOTOS[src]}
            alt={ALT_LABELS[src]}
            imageClassName={imageClassName}
            className={cell}
          />
        ))}
      </div>
    </div>
  );
}

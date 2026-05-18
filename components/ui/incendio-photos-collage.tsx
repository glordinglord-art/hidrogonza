"use client";

import { ExpandableImage } from "@/components/ExpandableImage";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

const PHOTOS = IMAGES.services.incendioGallery;

const DESKTOP_LAYOUT = [
  { src: 0, className: "col-span-8 row-span-3 col-start-1 row-start-1", imageClassName: "object-cover object-center" },
  { src: 1, className: "col-span-8 row-span-3 col-start-1 row-start-4", imageClassName: "object-cover object-center" },
  {
    src: 2,
    className: "col-span-4 row-span-6 col-start-9 row-start-1",
    imageClassName: "object-cover object-center",
  },
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

type IncendioPhotosCollageProps = {
  className?: string;
};

export function IncendioPhotosCollage({ className }: IncendioPhotosCollageProps) {
  return (
    <div className={cn("absolute inset-0 z-[1] overflow-hidden bg-neutral-900", className)}>
      <div className="flex h-full flex-col gap-1 p-1 md:hidden">
        {PHOTOS.map((src, index) => (
          <CollageCell
            key={src}
            src={src}
            alt={`Red contra incendio — obra ${index + 1}`}
            imageClassName="object-cover object-center"
            className="min-h-0 flex-1"
          />
        ))}
      </div>

      <div className="hidden h-full grid-cols-12 grid-rows-6 gap-1 p-1 sm:gap-1.5 sm:p-1.5 md:grid">
        {DESKTOP_LAYOUT.map(({ src, className: cell, imageClassName }, index) => (
          <CollageCell
            key={PHOTOS[src]}
            src={PHOTOS[src]}
            alt={`Red contra incendio — obra ${index + 1}`}
            imageClassName={imageClassName}
            className={cell}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

type ExpandableImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  aspectClassName?: string;
  imageRotate?: number;
  /** cover recorta bordes blancos; contain muestra la imagen completa */
  fit?: "contain" | "cover";
  /** Modal sin caja blanca, solo imagen sobre fondo oscuro */
  lightboxTight?: boolean;
};

export function ExpandableImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  priority = false,
  caption,
  aspectClassName = "relative aspect-[3/4] w-full",
  imageRotate = 0,
  fit = "contain",
  lightboxTight = false,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const rotateStyle = imageRotate ? { transform: `rotate(${imageRotate}deg)` } : undefined;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          className
        )}
        aria-label={`Ampliar imagen: ${alt}`}
      >
        <div className={cn(aspectClassName, "flex items-center justify-center overflow-hidden")}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            style={rotateStyle}
            className={cn(
              fit === "cover" ? "object-cover object-center" : "object-contain",
              "transition-transform duration-300 group-hover:scale-[1.02]",
              imageRotate !== 0 && "scale-[1.32]",
              imageClassName
            )}
          />
        </div>
        <span className="absolute inset-0 flex items-center justify-center bg-[#0a192f]/0 transition-colors duration-300 group-hover:bg-[#0a192f]/25">
          <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0a192f] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ZoomIn className="h-4 w-4 text-primary" />
            Clic para ampliar
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a192f]/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
              aria-label="Cerrar vista ampliada"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25 }}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className={cn(
                  "relative w-full overflow-hidden",
                  lightboxTight
                    ? "max-h-[88vh] max-w-[min(96vw,1100px)]"
                    : "max-h-[78vh] rounded-2xl bg-white p-4 shadow-2xl sm:p-6"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  style={rotateStyle}
                  className={cn(
                    "mx-auto w-full",
                    lightboxTight
                      ? cn(
                          "max-h-[88vh] rounded-lg shadow-2xl",
                          fit === "cover" ? "w-full object-cover object-center" : "object-contain"
                        )
                      : cn(
                          "max-h-[72vh] w-auto max-w-full object-contain",
                          imageRotate !== 0 && "max-h-[85vh] max-w-[90vw]"
                        )
                  )}
                />
              </div>
              {(caption || alt) && (
                <p className="mt-4 max-w-2xl px-2 text-center text-sm text-white/90 sm:text-base">
                  {caption ?? alt}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  fit?: "contain" | "cover";
  lightboxTight?: boolean;
  layout?: "fill" | "landscape" | "collage";
  openOn?: "click" | "doubleClick";
  hint?: string;
};

const LIGHTBOX_TOP = "top-[5.25rem] md:top-[5.5rem]";
const LIGHTBOX_PAD_TOP = "pt-[5.25rem] md:pt-[5.5rem]";
const ZOOM_LEVEL = 2.75;

const VIEWPORT_BASE =
  "max-h-[min(72vh,calc(100dvh-11rem))] max-w-[min(92vw,1100px)]";
const VIEWPORT_ZOOMED =
  "max-h-[min(78vh,calc(100dvh-9.5rem))] max-w-[min(96vw,1200px)]";

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
  layout = "fill",
  openOn = "click",
  hint,
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const didDragRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rotateStyle = imageRotate ? { transform: `rotate(${imageRotate}deg)` } : undefined;

  const resetZoom = useCallback(() => {
    setScale(1);
    setOrigin({ x: 50, y: 50 });
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
    dragRef.current = null;
    didDragRef.current = false;
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    resetZoom();
  }, [resetZoom]);

  const openLightbox = useCallback(() => {
    resetZoom();
    setOpen(true);
  }, [resetZoom]);

  const handleImageClick = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      if (didDragRef.current) {
        didDragRef.current = false;
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      if (scale > 1) {
        resetZoom();
        return;
      }

      setOrigin({ x, y });
      setPan({ x: 0, y: 0 });
      setScale(ZOOM_LEVEL);
    },
    [scale, resetZoom]
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLImageElement>) => {
      if (scale <= 1) return;
      didDragRef.current = false;
      dragRef.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
      setIsDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [scale, pan.x, pan.y]
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLImageElement>) => {
      if (!dragRef.current || scale <= 1) return;
      const dx = event.clientX - dragRef.current.x;
      const dy = event.clientY - dragRef.current.y;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) didDragRef.current = true;
      setPan({ x: dragRef.current.panX + dx, y: dragRef.current.panY + dy });
    },
    [scale]
  );

  const handlePointerUp = useCallback((event: React.PointerEvent<HTMLImageElement>) => {
    dragRef.current = null;
    setIsDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }, []);

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

  const thumbnailHint =
    hint ?? (openOn === "doubleClick" ? "Doble clic para ver" : "Clic para ver");

  const isZoomed = scale > 1;

  const imageTransform =
    isZoomed || imageRotate
      ? {
          transformOrigin: `${origin.x}% ${origin.y}%`,
          transform: [
            imageRotate ? `rotate(${imageRotate}deg)` : "",
            isZoomed ? `scale(${scale}) translate(${pan.x / scale}px, ${pan.y / scale}px)` : "",
          ]
            .filter(Boolean)
            .join(" "),
        }
      : undefined;

  const lightbox = (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className={cn(
            "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a192f]/90 px-4 pb-8 backdrop-blur-md sm:px-8",
            LIGHTBOX_PAD_TOP
          )}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className={cn(
              "fixed right-4 z-[210] flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a192f] shadow-lg transition-transform hover:scale-105 active:scale-95 sm:h-12 sm:w-12",
              LIGHTBOX_TOP
            )}
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" strokeWidth={2.25} />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full min-h-0 flex-1 flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={cn(
                "relative flex w-full items-center justify-center overflow-hidden",
                isZoomed ? VIEWPORT_ZOOMED : VIEWPORT_BASE,
                isZoomed
                  ? isDragging
                    ? "cursor-grabbing"
                    : "cursor-grab"
                  : "cursor-zoom-in"
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                draggable={false}
                onClick={handleImageClick}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={imageTransform}
                className={cn(
                  "mx-auto block max-w-full select-none object-contain touch-none",
                  "max-h-[min(72vh,calc(100dvh-11rem))]",
                  "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  lightboxTight && "rounded-lg shadow-2xl ring-1 ring-white/10",
                  isDragging && "transition-none"
                )}
              />
            </div>

            <p className="mt-3 shrink-0 text-center text-xs font-medium text-white/75 sm:text-sm">
              {isZoomed
                ? "Arrastra para mover · Clic para alejar"
                : "Clic en la zona que quieras acercar"}
            </p>

            {(caption || alt) && (
              <p className="mt-2 max-w-2xl shrink-0 px-2 text-center text-sm text-white/85 sm:text-base">
                {caption ?? alt}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={openOn === "click" ? openLightbox : undefined}
        onDoubleClick={openOn === "doubleClick" ? openLightbox : undefined}
        className={cn(
          "group relative block h-full min-h-0 w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          className
        )}
        aria-label={`Ver imagen: ${alt}`}
      >
        {layout === "collage" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="async"
            draggable={false}
            style={rotateStyle}
            className={cn(
              "absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-[1.02]",
              fit === "cover" ? "object-cover object-center" : "object-contain object-center",
              imageClassName
            )}
          />
        ) : layout === "landscape" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            style={rotateStyle}
            className={cn(
              "mx-auto h-auto w-full max-h-[min(38vh,300px)] rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.01] sm:max-h-[min(42vh,340px)] md:max-h-[360px]",
              imageClassName
            )}
          />
        ) : (
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
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-[#0a192f]/0 transition-colors duration-300 group-hover:bg-[#0a192f]/25">
          <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0a192f] opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ZoomIn className="h-4 w-4 text-primary" />
            {thumbnailHint}
          </span>
        </span>
      </button>

      {mounted && createPortal(lightbox, document.body)}
    </>
  );
}

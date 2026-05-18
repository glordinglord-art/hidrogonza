"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl?: string;
  background?: ReactNode;
  subheading: string;
  heading: string;
  children: ReactNode;
}

export const TextParallaxContent = ({
  imgUrl,
  background,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <SectionHeading subheading={subheading} heading={heading} />

      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} background={background} />
      </div>
      {children}
    </div>
  );
};

function SectionHeading({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) {
  return (
    <header className="mb-6 px-2 text-center md:mb-8">
      <p className="mb-2 text-sm font-semibold text-primary md:text-lg">{subheading}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {heading}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
    </header>
  );
}

const StickyImage = ({
  imgUrl,
  background,
}: {
  imgUrl?: string;
  background?: ReactNode;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      style={{
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl bg-neutral-900"
    >
      {background ? (
        <div className="absolute inset-0">{background}</div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: imgUrl ? `url(${imgUrl})` : undefined }}
        />
      )}
    </motion.div>
  );
};

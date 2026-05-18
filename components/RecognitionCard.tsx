"use client";

import type { Recognition } from "@/constants/credentials";
import { RecognitionCardHorizontal } from "@/components/RecognitionCardHorizontal";
import { RecognitionCardVertical } from "@/components/RecognitionCardVertical";

export type RecognitionCardItem = Recognition;

type RecognitionCardProps = {
  item: RecognitionCardItem;
  className?: string;
  variants?: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number; transition: { duration: number } };
  };
};

/** Usa el layout vertical u horizontal según el reconocimiento. */
export function RecognitionCard({ item, className, variants }: RecognitionCardProps) {
  if (item.orientation === "horizontal") {
    return <RecognitionCardHorizontal item={item} className={className} variants={variants} />;
  }
  return <RecognitionCardVertical item={item} className={className} variants={variants} />;
}

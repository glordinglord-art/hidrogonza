import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { cn } from "@/lib/utils";

type HeroLogoProps = {
  className?: string;
  /** light = fondo claro del hero PulseFit; dark = hero azul */
  variant?: "light" | "dark";
};

export function HeroLogo({ className, variant = "light" }: HeroLogoProps) {
  const isLight = variant === "light";

  return (
    <div
      className={cn(
        "relative flex w-full max-w-sm flex-col items-center text-center sm:max-w-md lg:max-w-lg",
        className
      )}
    >
      <div className="relative mb-6 sm:mb-8">
        <Image
          src={IMAGES.logoIcon}
          alt="Hidrogonza S.A.S"
          width={220}
          height={220}
          quality={100}
          priority
          className="h-32 w-32 object-contain drop-shadow-[0_8px_24px_rgba(0,174,239,0.25)] sm:h-40 sm:w-40 lg:h-44 lg:w-44"
        />
      </div>

      <h2
        className={cn(
          "text-2xl font-bold tracking-wide sm:text-3xl lg:text-4xl",
          isLight ? "text-[#0a192f]" : "text-white drop-shadow-md"
        )}
      >
        HIDROGONZA S.A.S
      </h2>
      <p
        className={cn(
          "mt-2 text-xs font-semibold tracking-[0.22em] sm:text-sm lg:text-base",
          isLight ? "text-primary" : "text-sky-100"
        )}
      >
        SOLUCIONES AL INSTANTE
      </p>
    </div>
  );
}

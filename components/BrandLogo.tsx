import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IMAGES } from "@/constants/images";

type BrandLogoProps = {
  variant?: "header" | "footer";
  className?: string;
  href?: string;
  onNavigate?: () => void;
};

/** Logo nítido en fondo claro: ícono transparente + texto en HTML */
export function BrandLogo({
  variant = "header",
  className,
  href = "/",
  onNavigate,
}: BrandLogoProps) {
  const isFooter = variant === "footer";

  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src={IMAGES.logoIcon}
        alt=""
        width={isFooter ? 56 : 44}
        height={isFooter ? 56 : 44}
        className={cn(
          "shrink-0 object-contain",
          isFooter ? "h-14 w-14" : "h-11 w-11 sm:h-12 sm:w-12"
        )}
        priority={!isFooter}
      />
      <div className="flex min-w-0 flex-col leading-tight">
        <span
          className={cn(
            "font-bold tracking-wide",
            isFooter ? "text-base text-white" : "text-sm text-[#0a192f] sm:text-base"
          )}
        >
          HIDROGONZA S.A.S
        </span>
        <span
          className={cn(
            "font-medium tracking-wider text-primary",
            isFooter ? "text-xs" : "text-[10px] sm:text-xs"
          )}
        >
          SOLUCIONES AL INSTANTE
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="shrink-0" onClick={onNavigate}>
        {content}
      </Link>
    );
  }

  return content;
}

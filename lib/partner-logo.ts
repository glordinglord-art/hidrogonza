import type { Partner } from "@/constants/content";

export const partnerLogoAreaStyles = {
  yellow: "bg-gradient-to-r from-[#e8c400] via-[#f5d800] to-[#fae566]",
  light: "bg-slate-50",
  dark: "bg-black",
  orange: "bg-[#f16522]",
  blue: "bg-[#004b9b]",
} as const;

type LogoProps = {
  w: number;
  h: number;
  minH: string;
  img: string;
  areaMinH?: string;
};

export function getPartnerLogoProps(
  partner: Partner,
  variant: "card" | "preview" = "card"
): LogoProps {
  const style = partner.logoStyle ?? "yellow";
  const large = partner.logoSize === "large";

  if (variant === "preview") {
    if (large && style === "light") {
      return {
        w: 480,
        h: 120,
        minH: "",
        img: "max-h-[88px] max-w-[380px]",
        areaMinH: "min-h-[140px]",
      };
    }
    if (large && (style === "dark" || style === "blue")) {
      return {
        w: 480,
        h: 120,
        minH: "",
        img: "max-h-[88px] max-w-[380px]",
        areaMinH: "min-h-[140px]",
      };
    }
    if (style === "light") return { w: 400, h: 100, minH: "", img: "max-h-[72px] max-w-[320px]", areaMinH: "min-h-[120px]" };
    if (style === "dark") return { w: 280, h: 120, minH: "", img: "max-h-[100px] max-w-[220px]", areaMinH: "min-h-[120px]" };
    if (style === "blue") return { w: 280, h: 120, minH: "", img: "max-h-[100px] max-w-[220px]", areaMinH: "min-h-[120px]" };
    if (style === "orange") return { w: 280, h: 120, minH: "", img: "max-h-[100px] max-w-[240px]", areaMinH: "min-h-[120px]" };
    return { w: 280, h: 90, minH: "", img: "max-h-20 max-w-[260px]", areaMinH: "min-h-[120px]" };
  }

  if (large && style === "light") {
    return {
      w: 560,
      h: 150,
      minH: "min-h-[175px]",
      img: "max-h-[115px] max-w-[480px]",
    };
  }

  if (large && (style === "dark" || style === "blue")) {
    return {
      w: 560,
      h: 150,
      minH: "min-h-[175px]",
      img: "max-h-[115px] max-w-[480px]",
    };
  }

  if (style === "light") {
    return { w: 480, h: 120, minH: "min-h-[140px]", img: "max-h-[90px] max-w-[400px]" };
  }
  if (style === "dark") {
    return { w: 320, h: 140, minH: "min-h-[160px]", img: "max-h-[110px] max-w-[260px]" };
  }
  if (style === "orange") {
    return { w: 320, h: 140, minH: "min-h-[160px]", img: "max-h-[100px] max-w-[280px]" };
  }
  if (style === "blue") {
    return { w: 320, h: 140, minH: "min-h-[160px]", img: "max-h-[110px] max-w-[260px]" };
  }
  return { w: 400, h: 140, minH: "min-h-[160px]", img: "max-h-[100px] max-w-[320px]" };
}

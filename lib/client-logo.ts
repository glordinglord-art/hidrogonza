/** Tamaños según proporción del PNG en /public/clients/ */
export type ClientLogoLayout = "square" | "stacked" | "wide";

const LOGO_LAYOUT: Record<string, ClientLogoLayout> = {
  "/clients/constructora-capital.png": "stacked",
  "/clients/total-urbe.png": "square",
  "/clients/optima-construcciones.png": "wide",
};

export function getClientLogoLayout(
  logo?: string,
  square?: boolean
): ClientLogoLayout {
  if (square) return "square";
  if (logo && LOGO_LAYOUT[logo]) return LOGO_LAYOUT[logo];
  return "wide";
}

export function getClientLogoImageProps(layout: ClientLogoLayout) {
  switch (layout) {
    case "square":
      return {
        width: 200,
        height: 200,
        className:
          "max-h-[5.5rem] max-w-[5.5rem] sm:max-h-[6.25rem] sm:max-w-[6.25rem]",
        containerClass: "min-h-[6.5rem] sm:min-h-[7rem]",
        cardClass: "min-h-[9rem] sm:min-h-[9.5rem]",
      };
    case "stacked":
      return {
        width: 219,
        height: 119,
        className:
          "mx-auto block max-h-[7.5rem] w-full max-w-[15rem] object-contain object-center sm:max-h-[8rem] sm:max-w-[16.5rem]",
        containerClass: "flex w-full min-h-[7.5rem] items-center justify-center sm:min-h-[8rem]",
        cardClass: "min-h-[10rem] sm:min-h-[10.5rem]",
      };
    case "wide":
      return {
        width: 400,
        height: 120,
        className: "max-h-[4.75rem] w-full max-w-[16rem] sm:max-h-[5.25rem] sm:max-w-[18rem]",
        containerClass: "min-h-[5.5rem] sm:min-h-[6rem]",
        cardClass: "min-h-[9rem] sm:min-h-[9.5rem]",
      };
  }
}

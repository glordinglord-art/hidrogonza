/** Tamaños según proporción del PNG en /public/clients/ */
export type ClientLogoLayout = "square" | "stacked" | "wide";

const LOGO_LAYOUT: Record<string, ClientLogoLayout> = {
  "/clients/constructora-capital.png": "stacked",
  "/clients/total-urbe.png": "square",
  "/clients/optima-construcciones.png": "wide",
};

/** El PNG ya incluye el nombre de la marca */
const LOGO_INCLUDES_NAME = new Set([
  "/clients/constructora-capital.png",
  "/clients/total-urbe.png",
]);

export function clientLogoIncludesName(logo?: string) {
  return logo ? LOGO_INCLUDES_NAME.has(logo) : false;
}

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
          "mx-auto h-auto w-full max-h-[7.5rem] max-w-[10.5rem] object-contain sm:max-h-[8.25rem] sm:max-w-[11.5rem]",
        containerClass: "flex w-full min-h-[7.5rem] items-center justify-center sm:min-h-[8.25rem]",
        cardClass: "min-h-[10rem] sm:min-h-[10.5rem]",
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
        width: 320,
        height: 160,
        className:
          "mx-auto h-auto w-full max-h-[6.5rem] max-w-[15rem] object-contain object-center sm:max-h-[7rem] sm:max-w-[17.5rem]",
        containerClass: "flex w-full min-h-[6rem] items-center justify-center sm:min-h-[6.5rem]",
        cardClass: "min-h-[9rem] sm:min-h-[9.5rem]",
      };
  }
}

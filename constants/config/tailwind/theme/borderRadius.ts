import { TailwindBorderType } from "@typescript/config/tailwind";

export const TAILWIND_BORDER_RADIUS: TailwindBorderType = {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
};

import { TailwindThemeType } from "@typescript/config/tailwind";
import { TAILWIND_COLORS } from "./colors";
import { TAILWIND_BORDER_RADIUS } from "./borderRadius";
import { TAILWIND_KEYFRAMES } from "./keyframes";
import { TAILWIND_ANIMATION } from "./animation";
import { TAILWIND_FONT_FAMILY } from "./fontFamily";

export const TAILWIND_THEME: TailwindThemeType = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: TAILWIND_FONT_FAMILY,
    colors: TAILWIND_COLORS,
    borderRadius: TAILWIND_BORDER_RADIUS,
    keyframes: TAILWIND_KEYFRAMES,
    animation: TAILWIND_ANIMATION,
  },
};

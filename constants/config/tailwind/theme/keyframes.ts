import { TailwindKeyframesType } from "@typescript/config/tailwind";

export const TAILWIND_KEYFRAMES: TailwindKeyframesType = {
  "accordion-down": {
    from: { height: "0" },
    to: { height: "var(--radix-accordion-content-height)" },
  },
  "accordion-up": {
    from: { height: "var(--radix-accordion-content-height)" },
    to: { height: "0" },
  },
  aurora: {
    from: {
      backgroundPosition: "50% 50%, 50% 50%",
    },
    to: {
      backgroundPosition: "350% 50%, 350% 50%",
    },
  },
};

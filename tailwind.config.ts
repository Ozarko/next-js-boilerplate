import type { Config } from "tailwindcss";
import plugins from "./helpers/ui/tailwind-utils";
import { TAILWIND_CONTENT, TAILWIND_THEME } from "./constants/config/tailwind";

const config: Config = {
  content: TAILWIND_CONTENT,
  darkMode: ["class"],
  prefix: "",
  theme: TAILWIND_THEME,
  plugins: [...plugins],
};

export default config;

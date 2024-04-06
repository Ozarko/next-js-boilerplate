import { addVariablesForColors } from "./addVariablesForColors";
import { withSVGBackground } from "./withSVGBackground";
import tailwindAnimate from "tailwindcss-animate";

const tailwindUtils = [
  tailwindAnimate,
  addVariablesForColors,
  withSVGBackground,
];

export default tailwindUtils;

import type { Config } from "tailwindcss";
import {
  KeyValuePair,
  RecursiveKeyValuePair,
  ResolvableTo,
} from "tailwindcss/types/config";
import { Optional } from "./common";

export type TailwindContentType = Config["content"];

export type TailwindThemeType = Config["theme"];

export type TailwindColorsType = Optional<
  ResolvableTo<RecursiveKeyValuePair<string, string>>
>;

export type TailwindBorderType = Optional<
  ResolvableTo<KeyValuePair<string, string>>
>;

export type TailwindKeyframesType = Optional<
  ResolvableTo<
    KeyValuePair<string, KeyValuePair<string, KeyValuePair<string, string>>>
  >
>;

export type TailwindAnimationType = Optional<
  ResolvableTo<KeyValuePair<string, string>>
>;

export type TailwindFontFamilyType = Optional<
  ResolvableTo<
    KeyValuePair<
      string,
      | string
      | string[]
      | [
          fontFamily: string | string[],
          configuration: Partial<{
            fontFeatureSettings: string;
            fontVariationSettings: string;
          }>
        ]
    >
  >
>;

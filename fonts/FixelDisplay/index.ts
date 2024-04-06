import localFonts from "next/font/local";

export const Fixel = localFonts({
  src: [
    {
      path: "./font/FixelDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/FixelDisplay-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./font/FixelDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/FixelDisplay-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./font/FixelDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/FixelDisplay-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./font/FixelDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./font/FixelDisplay-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-Fixel",
  preload: true,
});

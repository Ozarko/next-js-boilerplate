import type { PropsWithChildren } from "react";
import { ThemeProvider } from "../ThemeProvider";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

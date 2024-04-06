import { cn } from "@helpers/ui/cn";
import { TypographyType } from "@typescript/components/typography";

export function TypographyH3({ children, className }: TypographyType) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

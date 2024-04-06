import { cn } from "@helpers/ui/cn";
import { TypographyType } from "@typescript/components/typography";

export function TypographyH4({ children, className }: TypographyType) {
  return (
    <h4
      className={cn(
        "font-fixel scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h4>
  );
}

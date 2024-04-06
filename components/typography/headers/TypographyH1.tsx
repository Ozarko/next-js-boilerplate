import { cn } from "@helpers/ui/cn";
import { TypographyType } from "@typescript/components/typography";

export function TypographyH1({ children, className }: TypographyType) {
  return (
    <h1
      className={cn(
        "font-fixel text-primary scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

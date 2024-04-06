import { cn } from "@helpers/ui/cn";
import { TypographyType } from "@typescript/components/typography";

export function TypographyH2({ children, className }: TypographyType) {
  return (
    <h2
      className={cn(
        "font-fixel scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

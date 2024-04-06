import { cn } from "@helpers/ui/cn";
import { TypographyType } from "@typescript/components/typography";

export function TypographyP({ children, className }: TypographyType) {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  );
}

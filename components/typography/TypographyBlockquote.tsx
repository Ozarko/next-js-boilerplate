import { cn } from "@helpers/ui/cn";
import { TypographyType } from "@typescript/components/typography";

export function TypographyBlockquote({ children, className }: TypographyType) {
  return (
    <blockquote
      className={cn("font-fixel mt-6 border-l-2 pl-6 italic", className)}
    >
      {children}
    </blockquote>
  );
}

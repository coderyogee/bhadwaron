import { cn } from "@/lib/utils";

/**
 * The site mark: the Institute's official logo.
 *
 * Phones get the three-column emblem alone; from `md` up the full horizontal
 * lockup is used. At phone widths the lockup's lettering would be unreadable,
 * so showing the emblem there is a legibility decision, not a shortcut.
 *
 * `tone="dark"` swaps to the ivory-and-gold version for navy backgrounds.
 * Presentational, so the intro and footer can render it without a router.
 */
export function Wordmark({
  size = "md",
  tone = "light",
  className,
}: {
  size?: "sm" | "md" | "lg";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <picture className={cn("inline-flex", className)}>
      <source media="(min-width: 768px)" srcSet={`/brand/horizontal-${tone}.webp`} />
      <img
        src={`/brand/columns-${tone}.webp`}
        alt="Institute for Educational Accountability"
        width={160}
        height={150}
        decoding="async"
        className={cn(
          "w-auto",
          size === "sm" && "h-9 md:h-10",
          size === "md" && "h-10 md:h-12",
          size === "lg" && "h-14 md:h-20",
        )}
      />
    </picture>
  );
}

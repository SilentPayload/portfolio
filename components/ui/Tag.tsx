interface Props {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: Props) {
  const base =
    "inline-block font-mono text-xs px-2.5 py-0.5 rounded-full border";
  const styles =
    variant === "accent"
      ? "border-accent/40 text-accent bg-accent/10"
      : "border-edge text-muted bg-surface";

  return <span className={`${base} ${styles}`}>{children}</span>;
}

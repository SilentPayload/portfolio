interface Props {
  children: React.ReactNode;
  index?: string;
}

export function SectionLabel({ children, index }: Props) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3 select-none">
      {index && <span className="text-muted mr-2">{index}</span>}
      {children}
    </p>
  );
}

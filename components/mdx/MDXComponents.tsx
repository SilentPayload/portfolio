import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-3xl font-bold text-ink mt-8 mb-4 first:mt-0"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-bold text-ink mt-10 mb-3 border-b border-edge pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold text-ink mt-6 mb-2" {...props} />
  ),
  p: (props) => (
    <p className="text-muted leading-relaxed my-4" {...props} />
  ),
  a: (props) => (
    <a
      className="text-accent underline underline-offset-2 hover:text-accent-dim transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-outside pl-5 my-4 space-y-1.5 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-outside pl-5 my-4 space-y-1.5 text-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-2 border-accent pl-4 my-6 text-muted italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="font-mono text-sm bg-surface text-accent px-1.5 py-0.5 rounded text-[0.85em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="bg-surface border border-edge rounded-xl p-5 overflow-x-auto my-6 text-sm font-mono text-ink"
      {...props}
    />
  ),
  hr: () => <hr className="border-edge my-8" />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
};

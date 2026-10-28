// Placeholder rendering. Anything in [square brackets] from the spec is a fact still to be confirmed;
// it is shown highlighted on the page so it is impossible to miss before launch.
// To find every placeholder in the code: grep -rn "<Todo\|<Fact\|TODO(placeholder)" app components lib content

import Link from "next/link";

export default function Todo({ children }: { children: React.ReactNode }) {
  return (
    <mark className="todo" title="Placeholder: replace before launch">
      {children}
    </mark>
  );
}

/** Renders a confirmed value, or the placeholder if it is still null. */
export function Fact({ value, placeholder }: { value: string | number | null | undefined; placeholder: string }) {
  if (value === null || value === undefined || value === "") return <Todo>{placeholder}</Todo>;
  return <>{value}</>;
}

/**
 * A link whose destination may not be configured yet. With no href it renders the label plus a
 * placeholder instead of a dead "#" link.
 */
export function MaybeLink({
  href,
  children,
  placeholder,
  className,
}: {
  href: string | null;
  children: React.ReactNode;
  placeholder: string;
  className?: string;
}) {
  if (!href) {
    return (
      <span className={className} aria-disabled="true">
        {children} <Todo>{placeholder}</Todo>
      </span>
    );
  }
  const external = /^https?:\/\//.test(href);
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

import type { ReactNode } from "react";

type BaseProps = {
  label?: string;
  className: string;
  icon?: ReactNode;
  arialabel?: string;
};

type ButtonAsButton = BaseProps & {
  onClick: () => void;
  href?: never;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
};

type Props = ButtonAsButton | ButtonAsLink;

export default function Button(props: Props) {
  const { label, className, icon, arialabel } = props;

  if ("href" in props) {
    return (
      <a href={props.href} aria-label={arialabel} className={className}>
        {label}
        {icon}
      </a>
    );
  }

  return (
    <button
      onClick={props.onClick}
      aria-label={arialabel}
      className={className}
    >
      {label}
      {icon}
    </button>
  );
}

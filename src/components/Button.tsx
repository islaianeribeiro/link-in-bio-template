import type { ReactNode } from "react";

type BaseProps = {
  label?: string;
  className: string;
  icon?: ReactNode;
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
  const { label, className, icon } = props;

  if ("href" in props) {
    return (
      <a href={props.href} className={className}>
        {label}
        {icon}
      </a>
    );
  }

  return (
    <button onClick={props.onClick} className={className}>
      {label}
      {icon}
    </button>
  );
}

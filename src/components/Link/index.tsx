import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ReactElement } from "react";

type LinkProps = NextLinkProps & {
  children: ReactElement | string;
  className?: string;
};

const Link = ({ className, ...props }: LinkProps) => (
  <NextLink
    {...props}
    className={`text-main-brand-blue-500 font-medium ${className}`}
  />
);

export default Link;

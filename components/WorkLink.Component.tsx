import Link from "next/link";
import { LinkProps } from "../src/types/LinkProps";

export const WorkLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-8 decoration-1"
    >
      {children}
    </a>
  </Link>
);

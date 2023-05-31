import style from "../../styles/About.module.css";
import { ReactNode } from "react";

interface TextBlockProps {
  children: ReactNode;
  opacity: number;
}

const TextBlock: React.FC<TextBlockProps> = ({ children, opacity }) => (
  <span
    className={`${style.aboutText} inline-block leading-snug after:content-['_']`}
    style={{
      opacity: opacity,
    }}
  >
    {children}
  </span>
);

export default TextBlock;

export interface BoxProps {
  id?: string;
  className?: string;
  animate?: "animate" | "initial" | undefined;
  initial?: "initial" | "animate" | undefined;
  exit?: "exit" | undefined;
  variants?: any;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

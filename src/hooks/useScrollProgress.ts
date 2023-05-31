import { useContext, useEffect, useRef, useState } from "react";
import { ScrollContext } from "../utils/scroll-observer";

export const useScrollProgress = (
  numOfPage: number
): [number, React.RefObject<HTMLDivElement>] => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!refContainer.current) return;

    const { clientHeight, offsetTop } = refContainer.current;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    const calculatedProgress = Math.min(
      numOfPage - 0.5,
      Math.max(0.5, percentY * numOfPage)
    );

    setProgress(calculatedProgress);
  }, [scrollY, numOfPage]);

  return [progress, refContainer];
};

import React, { useCallback, useEffect, useState } from "react";

interface ScrolValue {
  innerWidth: number;
}

interface Props {
  children?: React.ReactNode
}

export const SizeContext = React.createContext<ScrolValue>({
  innerWidth: 0,
});

const SizeObserver: React.FC<Props> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;

// hooks/useResponsiveHeight.ts
import { useState, useEffect } from "react";

export const useResponsiveHeight = () => {
  const [height, setHeight] = useState("50vh");

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ); // Get viewport height

      setHeight(`${vh - navbarHeight}px`);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return height;
};

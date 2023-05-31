import React from "react";
import { useResponsiveHeight } from "../../src/hooks/useResponsiveHeight";

export const LoadingAnimation: React.FC = () => {
  const height = useResponsiveHeight();

  return (
    <div className="flex justify-center items-center" style={{ height }}>
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );
};

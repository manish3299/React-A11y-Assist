import { useState, useEffect } from "react";

export function useRTL() {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  const toggleRTL = () => {
    setIsRTL((prev) => !prev);
  };

  return { isRTL, toggleRTL };
}

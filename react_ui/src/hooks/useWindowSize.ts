import React from "react";

type WindowSize = [number | undefined, number | undefined];

function getSize(): WindowSize {
  return [window?.innerWidth, window?.innerHeight];
}

export default function useWindowSize(delay: number): WindowSize {
  const [windowSize, setWindowSize] = React.useState(getSize);
  React.useEffect(() => {
    if (!(typeof window === "object")) return;
    let timeout: number | undefined;
    const handleResize = () => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => setWindowSize(getSize()), delay);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [delay]);
  return windowSize;
}

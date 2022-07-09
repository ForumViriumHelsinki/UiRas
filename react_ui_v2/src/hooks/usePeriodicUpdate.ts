import React from "react";

export default function usePeriodicUpdate(interval) {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    const iv = setInterval(() => {
      setCounter((c) => c + 1);
    }, interval);
    return () => clearInterval(iv);
  }, [interval]);
  return counter;
}

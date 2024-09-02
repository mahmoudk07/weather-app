import { useState, useEffect } from "react";

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 500, height: 200 });

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width } = entry.contentRect;
        const height = width * 0.55; // Aspect ratio 2:1
        setDimensions({ width, height });
      });
    });

    if (observeTarget) {
      resizeObserver.observe(observeTarget);
    }

    return () => {
      if (observeTarget) {
        resizeObserver.unobserve(observeTarget);
      }
    };
  }, [ref]);

  return dimensions;
};

export default useResizeObserver;

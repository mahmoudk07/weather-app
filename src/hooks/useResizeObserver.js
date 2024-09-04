import { useState, useEffect, useCallback } from "react";

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 470, height: 200 });

  // Callback function for ResizeObserver
  const handleResize = useCallback((entries) => {
    entries.forEach((entry) => {
      const { width } = entry.contentRect;
      const height = width * 0.55; 
      setDimensions({ width, height });
    });
  }, []);

  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver(handleResize);

    if (observeTarget) {
      resizeObserver.observe(observeTarget);
    }

    return () => {
      if (observeTarget) {
        resizeObserver.unobserve(observeTarget);
      }
    };
  }, [ref, handleResize]);

  return dimensions;
};

export default useResizeObserver;

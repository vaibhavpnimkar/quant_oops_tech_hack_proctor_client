import { useEffect, useRef } from "react";

const useThrottle = () => {
  const throttleSeed: any = useRef(null);

  const throttleFunction = useRef((func: any, delay: number) => {
    if (!throttleSeed.current) {
      // Call the callback immediately for the first time
      console.log("throttleFunction");
      func();
      throttleSeed.current = setTimeout(() => {
        throttleSeed.current = null;
      }, delay);
    }
  });

  useEffect(() => {
    return () => {
      clearTimeout(throttleSeed.current);
    };
  }, []);

  return throttleFunction.current;
};

export default useThrottle;

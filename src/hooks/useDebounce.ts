import { useCallback, useRef } from "react";

export default function useDebounce(callback: any, delay: number) {
  const timer = useRef<number>();

  const debouncedCallback = useCallback((...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = window.setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};
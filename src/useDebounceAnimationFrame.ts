import { useMemo, DependencyList } from "react";
import debounceAnimationFrame from "debounce-animation-frame";

const useDebounceAnimationFrame = <F extends (...args: any[]) => any>(
  fn: F,
  deps: DependencyList
) => {
  const memoized = useMemo(() => {
    const debouncedFn = debounceAnimationFrame(fn);
    return debouncedFn;
  }, deps);

  return memoized;
};

export default useDebounceAnimationFrame;

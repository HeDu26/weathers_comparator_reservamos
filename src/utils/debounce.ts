// src/utils/debounce.ts
type DebounceFunction = (...args: any[]) => void;

const debounce = (func: DebounceFunction, delay: number): DebounceFunction => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default debounce;

import { useState, useEffect } from 'react';

type DebounceFunction<T> = (value: T, delay: number) => T;

const useDebounce: DebounceFunction<string> = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

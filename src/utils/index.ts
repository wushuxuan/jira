import { useEffect, useState } from "react";

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const cleanObject = (object: Object) => {
  const obj = { ...object };
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (isFalsy(value)) {
      delete obj[key];
    }
  });
  return obj;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: object, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //每次在value变化以后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    //useEffect的return，每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};

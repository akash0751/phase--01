import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  if (typeof key !== "string") {
    throw new Error("Key must be a string");
  }

  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to localStorage key:", key, error);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

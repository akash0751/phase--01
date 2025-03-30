import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (callback, options) => {
  const targetRef = useRef(null); 
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && callback) {
        callback();
      }
    }, options);

    const currentRef = targetRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [callback, options]);

  return { targetRef, isIntersecting };
};

export default useIntersectionObserver;

import React,{useState} from 'react'
import useIntersectionObserver from './UseIntersectionObserver';

const Task9 = () => {
    const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));

    const loadMoreItems = () => {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 5 }, (_, i) => `Item ${prevItems.length + i + 1}`)]);
    };
  
    const { targetRef, isIntersecting } = useIntersectionObserver(loadMoreItems, {
      root: null, 
      rootMargin: "100px",
      threshold: 1.0, 
    });
  
    return (
      <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
        <h2> Infinite Scroll</h2>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {items.map((item, index) => (
            <li key={index} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
              {item}
            </li>
          ))}
        </ul>
        <div ref={targetRef} style={{ height: "50px", backgroundColor: isIntersecting ? "#4CAF50" : "#ddd", marginTop: "10px" }}>
          {isIntersecting ? "Loading more..." : "Scroll down to load more"}
        </div>
      </div>
    );
  };

export default Task9
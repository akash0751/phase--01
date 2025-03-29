import React ,{useRef} from 'react'

const Task9 = () => {
    const inputRef = useRef(null);
  
    
    const handleFocus = () => {
      inputRef.current.focus();
    };
  return (
    <div>
        <div>
      <h2>DOM Manipulation</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={handleFocus}>
        Focus Input
      </button>
    </div>
    </div>
  )
}

export default Task9
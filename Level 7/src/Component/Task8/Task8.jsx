import React,{useState} from 'react'
import useDebounce from './UseDebounce';
const Task8 = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500); 
  
    return (
      <div style={{ textAlign: "center", marginTop: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", maxWidth: "400px", margin: "auto" }}>
        <h2>🔍 Debounced Search</h2>
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <p style={{ marginTop: "10px" }}>
          <strong>Debounced Value:</strong> {debouncedSearchTerm}
        </p>
      </div>
    );
  };

export default Task8
import { useState, useEffect } from "react";

function PlayerStatus() {
    const [status, setStatus] = useState("online");
    const [counter, setCounter] = useState(1);
  
    // Toggle between the two status values - 'away' and 'online'
    function toggleStatus() {
      // Write your code here
      console.log("Note")
      if (status === "online") {
        setStatus("away")
      }
      if (status === "away") {
        setStatus("online")
      }
      
    }
    
    // Implement effect hook below.
    // Update the counter when status changes.
    useEffect(() => {
      setCounter(prev => prev + 1)
    }, [status]); 
  
    return (
      <div>
        <h1>{status}</h1>
        <h3>{counter}</h3>
        <button onClick={toggleStatus}>Toggle status</button>
      </div>
    );
  };

  export default PlayerStatus;
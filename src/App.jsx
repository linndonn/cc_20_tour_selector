import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState("All");
  const [allTours, setAllTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://course-https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project.com/react-tours-project");
      const data = await res.json();
      setTours(data);
      setAllTours(data);
      setError("");
    } catch (err) {
      setError("Error fetching tours.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    setTours(allTours);
  };

  const filteredTours = selected === "All"
    ? tours
    : tours.filter((tour) => tour.name === selected);

  return (
    <div>
      
            <h1>An Antiguan Tour of Europe (Tour App Project)</h1>
            <h2>Tour with us! Options listed in the drop down.</h2>
            {tours.length === 0 ? (
                <div className="no-tours">
               
    <p>No tours left. Refresh to reload.</p>
    <button onClick={handleRefresh} className="refresh-btn">
  Refresh List
      </button>
      </div>
      ) : (
      <DestinationSelector
      tours={tours}
      onSelectDestination={(destination) => {
      setFilter(destination);
      }}
     onRemove={handleRemoveTour}
          />
      )}
    </div>
    );
};
export default App;
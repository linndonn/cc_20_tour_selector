
import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("null");
  const [selected, setSelected] = useState("All");
  const [allTours, setAllTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      const data = await res.json();
      setTours(data);
      setAllTours(data);
      setError("");
    } catch (error) {
      setError("Error fetching tours.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleremoveTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const handlerefreshTours = () => {
    setTours(allTours);
  };

  const filteredTours = selected === "All"
    ? tours
    : tours.filter((tour) => tour.name === selected);

  return (
    <main className="app">
      <h1>An Antiguan Tour of Europe (Tour Destination Selector)</h1>
      <h2>Tour with us! Options listed in the drop down.</h2>
      <DestinationSelector
        tours={allTours}
        selected={selected}
        onSelect={setSelected}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={handleremoveTour}
        onRefresh={handlerefreshTours}
        selected={selected} 
      />
    </main>
  );
};

export default App;
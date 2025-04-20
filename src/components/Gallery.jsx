

import React, { useState, useEffect } from 'react';
import TourCard from "./TourCard";

//Gallery component to display a list of tours
function Gallery({ tours, setTours, onRemove }) {
  //Variables to manage loading state and error 
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect runs once on component mount to fetch tour data
  useEffect(() => {
    fetch('https://api.allorigins.win/get?url=https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => {
        //Update tour data from the wrapped API response
        setTours(JSON.parse(data.contents));
        setLoading(false);
      })
      .catch(err => {
        // Handle any errors during fetch
        setError(`Failed to fetch Tours: ${err.message}`);
        setLoading(false);
      });
  }, [setTours]); 

  // Render loading states and error messages
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  //Render the list of TourCard components once data is loaded
  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          price={tour.price}
          image={tour.image}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
}

export default Gallery;
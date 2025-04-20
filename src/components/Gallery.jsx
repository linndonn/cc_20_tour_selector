import React, {useState, useEffect} from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, loading, error, onRemove, onRefresh }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (tours.length === 0 && selected)
    return (
      <div>
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );

  return (
    <section className="gallery">
    {tours.map((tour) => (
        <TourCard
            key ={tour.id}
            id ={tour.id}
            name = {tour.name}
            info = {tour.info}
            price = {tour.price}
            image = {tour.image}
            onRemove = {onRemove}
        />
    ))}
</section>
)
};

export default Gallery;
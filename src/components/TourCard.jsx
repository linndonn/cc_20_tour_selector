import React, { useState } from 'react';

// TourCard component displays individual tour information
const TourCard = ({ id, name, info, price, image, onRemove}) => {
    // Local state to toggle between showing full text or a short preview
    const [readMore, setReadMore] = useState(false);

    return (
        <article className ="tour-card">
            <h3>{name}</h3>
            {/* Tour description (also shown in full above image, optional to keep) */}
            <h5> {info}</h5>
             {/* Tour image */}
            <img src={image} alt={name} />
             {/* Tour price */}
            <h4>Price: ${price}</h4>
            {/* Conditionally render shortened or full info text */}
            <p>
                
                {readMore ? info : `${info.substring(0, 100)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </p>
              {/* Button to remove this tour from the list */}
            <button className="remove-btn" onClick={() => onRemove(id)}>
            I'm not interested
                </button>

        </article>
    )
}

export default TourCard;
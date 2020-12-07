import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ style={}, totalStars = 5 }) {
  
    const [selectedStars, setSelectedStars] = useState(2);

    const Star = ({ selected = false, onSelect = f => f }) => (
  
        <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
        );

    const createArray = length => [...Array(length)];

    useEffect(() => {
        console.log("star mounted");

        return () => {
            console.log("star unmount")
        };
    }, []);
    return (
        
    <div style={{ padding: "5px", ...style }}>

        {createArray(totalStars).map((n, i) => (      
        <Star key={i} selected={selectedStars > i} 
        onSelect={() => setSelectedStars(i + 1)}
        />
        ))}
        <p>     
        {selectedStars} of {totalStars} stars   
        </p>
    </div>
    );
    }
    
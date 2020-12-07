import React from 'react';
import Instructions from './Instructions';
import IngredientList from '../organisms/IngredientList';
import StarRating from '../shared/StarRating'
import { createElement, useState, useEffect, useRef } from 'react';

function Recipe(props) {

  useEffect(() => {
    //console.log(props.steps);
  
}, []);

  return (
    <div className="Recipe">
      This is the Recipe of {props.name}{props.index}
      <IngredientList list={props.ingredients} />
      <Instructions title="Cookin Instructions" {...props}/>
      <StarRating key={props.index}/>
    </div>
  );
}

export default Recipe;

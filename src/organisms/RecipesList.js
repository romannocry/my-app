import React from 'react';
import { createElement, useState, useEffect, useRef } from 'react';
import Recipe from '../atoms/Recipe';
import {menu} from '../data';



function RecipesList() {
    const [recipes, setRecipes] = useState([]);
    const componentIsMounted = useRef(true);
    
    useEffect(() => {
        console.log("Recipes list mounted");
        setRecipes(menu)

        return () => {
            componentIsMounted.current = false;
        };
    }, []);
    
    return (
        <div className="Recipe">
        <ul>
            {menu.map((item,index)=> (
                //<li key={index}>{item.name}</li>
                <Recipe key={index} {...item}></Recipe>
            ))}
        </ul>

        
        This is the Recipes List component !!
        </div>
    );
}

export default RecipesList;

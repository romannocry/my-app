// ./src/components/Instructions.js
import { createElement, useState, useEffect, useRef } from 'react';
import React from "react";
/*
export default function Instructions({ title, steps }) {
return (
    <section className="instructions">
        <h2>{title}</h2>
        {steps.map((s, i) => (
        <p key={i}>{s}</p>
        ))}
        </section>
    );
}*/

function Instructions(props) {

    const componentIsMounted = useRef(true);
    
    useEffect(() => {
        console.log("instructions mounted");

        return () => {
            console.log("unmount instructions")
            componentIsMounted.current = false;
        };
    }, []);


    return (
        <section className="instructions">
            <h1>{props.title}</h1>
            {props.steps.map((s, i) => (
            <p key={i}>{s}</p>
            ))}
        </section>
        );  
}

export default Instructions;
import React from "react";
import { useState } from "react";

export default function HighLow() {
    const [number , setNumber] = useState(0);

    function generateRandomNum(){
        const random = Math.floor(Math.random() * 10 );
        console.log(random)
    }
    return(
        <div>
            <h1>High Low Game</h1>
            <p>Welcome to the High Low game! Guess if the next number will be higher or lower.</p>
            <div>
                <h2>0</h2>
                <form action="">
                    <input type="number" name="" id="" />
                    <button type="submit"></button>
                </form>
            </div>
            <button>Roll</button>
        </div>

    )
}
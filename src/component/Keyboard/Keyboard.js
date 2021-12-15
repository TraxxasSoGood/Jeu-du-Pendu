import React from 'react'
import './Keyboard.css'

export default function Keyboard() {
    return "abcdefghijklmnopqrstuvwwxyz".split("").map(letter => (
        <button 
            className="btn"
           
        >
            {letter}
        </button>
    )) 
}
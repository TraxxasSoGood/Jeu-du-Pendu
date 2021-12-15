import React from 'react';
import '../Play.css';
import CallApi from './CallApi.js';
import Keyboard from './Keyboard/Keyboard.js';

export default function Play() {
    return (
        <div className="Play">
        <header className="Play-header">
        <img src='./images/logo.png' className="Play-logo" alt="logo" />
            <div className='titre'>
            <h1> Jeu du pendu </h1>
            </div>
            <div>
            <CallApi />
            </div>
            <div>
            <label for="name">Bonne chance</label>
            <br/>
            <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="50"></input>
            </div>
            <div>
            <Keyboard />
            </div>
        </header>
      </div>
    )
}

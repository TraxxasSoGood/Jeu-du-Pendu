import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../Home.css';
import Classement from './Classement.js';


function Home() {

  const navigate = useNavigate();

  const play = () => navigate('play')
  return (
    <div className="Home">
      <header className="Home-header">
        <img src='./images/logo.png' className="Home-logo" alt="logo" />
        <h1> Jeu du pendu </h1>
        <label for="Pseudo">Pseudo</label>
        <input type="text" id="name" name="name" size="40"></input>
        <br/>
        <button type="button" className="bouton-home" onClick={play}
        > Jouer </button>
        <div>
        <Classement />
        </div>
      </header>
    </div>
  );
}


export default Home;

import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../contexts/UserAuthContext";
import '../styles/Home.css';
import {Link} from 'react-router-dom';

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (
    <>
      <div className="button">
        <Link to="/agents">
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Agents</span>
      </span>
    </button>
    </Link>
  </div>

  
  <div className="button">
  <Link to="/maps">
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Maps</span>
      </span>
    </button>
    </Link>
  </div>

  <div className="button">
        <Link to="/gamemodes">
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Gamemodes</span>
      </span>
    </button>
    </Link>
  </div>
  
  <div className="button">
  <Link to="/weapons">
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Weapons</span>
      </span>
    </button>
    </Link>
  </div>

  
  <div className="button">
  <Link to="/sprays">
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Sprays</span>
      </span>
    </button>
    </Link>
  </div>

  <div className="button" onClick={()=>{window.open('https://www.youtube.com/watch?v=t72VZpX9bYM')}}>
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Beginners Guide</span>
      </span>
    </button>
  </div>


  <div className="button">
  <Link to="/player">
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Player Cards</span>
      </span>
    </button>
    </Link>
  </div>


  <div className="button" onClick={()=> {handleLogout()}}>
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">Log Out</span>
      </span>
    </button>
  </div>
 
  </>
  );
};

export default Home;
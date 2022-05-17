import React from "react";
import '../styles/WeaponsArticle.css';
import {useNavigate, Link} from 'react-router-dom';

function WeaponsArticle({ data }) {
  const navigate = useNavigate();
  console.log(data)
  return (
    <div className="agents">
    <div className="container-glass">
  <img className="img" src={data.displayIcon} />
  <h3>
	{data.displayName}
  </h3>
  
</div>
  </div>
  );
}

export default WeaponsArticle;

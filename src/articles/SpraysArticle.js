import React from "react";
import '../styles/SpraysArticle.css';
import {useNavigate, Link} from 'react-router-dom';

function SpraysArticle({ data }) {
  const navigate = useNavigate();
  console.log(data)
  return (
    <div className="agents">
    <div className="container-glass1">
  <img className="img" src={data.displayIcon} />
  <h3>
	{data.displayName}
  </h3>
  
</div>
  </div>
  );
}

export default SpraysArticle;
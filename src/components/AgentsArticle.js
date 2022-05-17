import React from "react";
import '../styles/AgentsArticle.css';
import {useNavigate, Link} from 'react-router-dom';

function AgentsArticle({ data }) {
  const navigate = useNavigate();
  console.log(data)
  return (
    <div className="agents">
    <div className="container-glass">
  <img className="img" src={data.displayIcon} />
  <p className="text">
	{data.description}
  </p>
  <Link to={`/details/${data.uuid}`} style={{textDecoration: 'none', color: '#000'}}>
  <div>
    <button className="btn">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">More Details</span>
      </span>
    </button>
  </div>
  </Link>
</div>
  </div>
  );
}

export default AgentsArticle;

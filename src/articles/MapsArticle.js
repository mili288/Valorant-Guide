import React from "react";
import '../styles/MapsArticle.css';
import {useNavigate, Link} from 'react-router-dom';

function AgentsArticle({ data }) {
  const navigate = useNavigate();
  console.log(data)
  return (
    <div className="agents">
    <div className="container-glass">
  <img className="img" src={data.displayIcon} />
  <h3>
	{data.displayName}
  </h3>
  <Link to={`/maps/${data.uuid}`} style={{textDecoration: 'none', color: '#000'}}>
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

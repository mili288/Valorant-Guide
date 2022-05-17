import React from 'react'
import {useNavigate} from 'react-router-dom';

function AgentsDescArticle({data}) {
  return (
<div className="container">
    <div className="Agents">
    <img src={data.displayIcon} style={{width: '18rem', height: '18rem'}}/>
      <h2>{data.displayName}</h2>
      <p>
        {data.description}
      </p>
  </div>
    </div>
  )
}

export default AgentsDescArticle

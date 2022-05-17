import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import { MapDetailsContext } from "../componetsContext/MapDetailsContext";
import MapDetailsArticle from '../articles/MapDetailsArticle';
function AgentDetails() {
  const { data } = useContext(MapDetailsContext);
  const { uuid } = useParams();
  console.log(data);
  return (
    <div>
      {data ?
      data.data.filter(agent => agent.uuid === uuid).map((agent) => (
            <MapDetailsArticle data={agent} key={agent.uuid}/>
        ))
        : "Loading"}
    </div>
  )
}

export default AgentDetails
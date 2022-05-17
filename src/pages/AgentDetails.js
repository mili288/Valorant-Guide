import React, { useContext } from 'react'
import {useParams} from 'react-router-dom';
import { AgentsContext } from "../components/AgentsContext";
import AgentDetailsArticle from '../articles/AgentDetailsArticle';

function AgentDetails() {
  const { data } = useContext(AgentsContext);
  const { uuid } = useParams();
  console.log(data);
  return (
    <div>
      {data ?
      data.data.filter(agent => agent.uuid === uuid).map((agent) => (
            <AgentDetailsArticle data={agent} key={agent.uuid}/>
        ))
        : "Loading"}
    </div>
  )
}

export default AgentDetails

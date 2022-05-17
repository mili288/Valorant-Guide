import React, { useContext } from "react";
import { AgentsContext } from "../components/AgentsContext";
import AgentsArticle from "../components/AgentsArticle";

function Agents(props) {
  const { data } = useContext(AgentsContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.data.map((agent) => (
              <AgentsArticle data={agent} key={agent.uuid} />
            ))
          : "Loading"}
      </div>
  );
}

export default Agents;
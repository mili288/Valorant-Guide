import React, { useContext } from "react";
import { GamemodesContext } from "../componetsContext/GamemodesContext";
import GamemodesArticle from "../articles/GamemodesArticle";

function Gamemodes(props) {
  const { data } = useContext(GamemodesContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.data.map((agent) => (
              <GamemodesArticle data={agent} key={agent.uuid} />
            ))
          : "Loading"}
      </div>
  );
}

export default Gamemodes;
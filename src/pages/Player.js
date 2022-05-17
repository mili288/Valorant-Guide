import React, { useContext } from "react";
import { PlayerContext } from "../componetsContext/PlayerContext";
import PlayerArticle from "../articles/PlayerArticle";

function Player(props) {
  const { data } = useContext(PlayerContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.data.map((agent) => (
              <PlayerArticle data={agent} key={agent.uuid} />
            ))
          : "Loading"}
      </div>
  );
}

export default Player;
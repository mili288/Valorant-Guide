import React, { useContext } from "react";
import { SpraysContext } from "../componetsContext/SpraysContext";
import SpraysArticle from "../articles/SpraysArticle";

function Sprays(props) {
  const { data } = useContext(SpraysContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.data.map((agent) => (
              <SpraysArticle data={agent} key={agent.uuid} />
            ))
          : "Loading"}
      </div>
  );
}

export default Sprays;
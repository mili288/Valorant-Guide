import React, { useContext } from "react";
import { MapsContext } from "../componetsContext/MapsContext";
import MapsArticle from "../articles/MapsArticle";

function Maps(props) {
  const { data } = useContext(MapsContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.data.map((agent) => (
              <MapsArticle data={agent} key={agent.uuid} />
            ))
          : "Loading"}
      </div>
  );
}

export default Maps;
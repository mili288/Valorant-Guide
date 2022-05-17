import React, { useContext } from "react";
import { WeaponsContext } from "../componetsContext/WeaponsContext";
import WeaponsArticle from "../articles/WeaponsArticle";

function Weapons(props) {
  const { data } = useContext(WeaponsContext);
  console.log(data);

  return (
    <div>
        {data
          ? data.data.map((agent) => (
              <WeaponsArticle data={agent} key={agent.uuid} />
            ))
          : "Loading"}
      </div>
  );
}

export default Weapons;
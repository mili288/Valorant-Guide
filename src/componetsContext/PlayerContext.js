import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PlayerContext = createContext();

export const PlayerContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://valorant-api.com/v1/playercards`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <PlayerContext.Provider value={{ data }}>
      {props.children}
    </PlayerContext.Provider>
  );
};
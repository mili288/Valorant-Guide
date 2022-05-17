import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GamemodesContext = createContext();

export const GamemodesContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://valorant-api.com/v1/gamemodes`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <GamemodesContext.Provider value={{ data }}>
      {props.children}
    </GamemodesContext.Provider>
  );
};

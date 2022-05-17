import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const WeaponsContext = createContext();

export const WeaponsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://valorant-api.com/v1/weapons`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <WeaponsContext.Provider value={{ data }}>
      {props.children}
    </WeaponsContext.Provider>
  );
};
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MapsContext = createContext();

export const MapsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://valorant-api.com/v1/maps`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <MapsContext.Provider value={{ data }}>
      {props.children}
    </MapsContext.Provider>
  );
};
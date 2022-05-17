import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SpraysContext = createContext();

export const SpraysContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://valorant-api.com/v1/sprays`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <SpraysContext.Provider value={{ data }}>
      {props.children}
    </SpraysContext.Provider>
  );
};
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AgentsContext = createContext();

export const AgentsContextProvider = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://valorant-api.com/v1/agents`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <AgentsContext.Provider value={{ data }}>
      {props.children}
    </AgentsContext.Provider>
  );
};
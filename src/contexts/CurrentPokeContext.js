import React from "react";

const CurrentPokeContext = React.createContext({
  poke: {},
  setPoke: () => {},
});

export { CurrentPokeContext };

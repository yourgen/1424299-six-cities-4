import React from "react";
import Main from "../main/main.jsx";
// eslint-disable-next-line react/prop-types
const App = ({rentOffers}) => {

  return (
    <Main rentOffers={rentOffers}/>
  );
};

export default App;

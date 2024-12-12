import React from "react";

import "./App.css";
import CountriesList from "./components/CountriesList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Country Info App</h1>
      <CountriesList />
    </div>
  );
};

export default App;

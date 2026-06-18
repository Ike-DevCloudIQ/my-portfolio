import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { PortfolioProvider } from "./contexts/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <div>
        <Main />
      </div>
    </PortfolioProvider>
  );
}

export default App;

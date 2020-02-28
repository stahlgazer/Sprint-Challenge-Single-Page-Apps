import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Route path="/">
      <Header />
      </Route>
      <Route exact path="/">
      <WelcomePage />
      </Route>
      <Route path="/characters">
      <CharacterList />
      </Route>
    </main>
  );
}

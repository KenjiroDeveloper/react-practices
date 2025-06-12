import { useState, useEffect } from "react";
import {Header, Footer, PokemonViewer, PokemonPagination } from "./components";

function App() {

  const [offset, setOffset] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <PokemonPagination onOffsetChange={setOffset}></PokemonPagination>
      <PokemonViewer offset={offset}></PokemonViewer>
      <Footer></Footer>
    </div>
  );
}

export default App;

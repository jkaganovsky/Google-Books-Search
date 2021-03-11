import React from "react";
import "bootstrap/scss/bootstrap.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Navbar />
      <div class="container py-2">
      <Header/>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "bootstrap/scss/bootstrap.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Results from "./components/Results.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import Saved from "./pages/Saved";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Router>
        <Route exact path={["/", "/search"]}>
          <BookSearch />
        </Route>
        <Route exact path={"/saved"}>
          <Saved />
        </Route>
      </Router>
      <Results />
    </>
  );
}

export default App;

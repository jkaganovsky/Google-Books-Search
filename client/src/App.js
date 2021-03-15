import React from "react";
import "bootstrap/scss/bootstrap.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSearch from "./pages/BookSearch";
import Saved from "./pages/Saved";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Router>
        <Switch>
          <Route exact path={["/", "/search"]} component={BookSearch}></Route>
          <Route exact path={"/saved"} component={Saved}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

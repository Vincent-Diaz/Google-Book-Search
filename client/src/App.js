import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar/NavBar";
import Header from "./components/Header/jumbotron";
import Search from "./pages/search";
import Saved from "./pages/saved";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Header />
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

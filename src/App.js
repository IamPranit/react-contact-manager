import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import UpdateContact from "./components/contacts/UpdateContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route
                exact
                path="/contacts/update/:id"
                component={UpdateContact}
              />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

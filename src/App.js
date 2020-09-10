import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserForm from "./Components/UserForm/UserForm";
import UserTable from "./Components/UserTable/UserTable";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/userform" component={UserForm} />
          <Route path="/users" component={UserTable} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

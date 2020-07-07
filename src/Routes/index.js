import React from "react";
import { Switch } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NewNote from "../pages/NewNote";
import Notes from "../pages/Notes";
import Settings from "../pages/Settings";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/settings" component={Settings} />
      <PrivateRoute exact path="/notes/new" component={NewNote}/>
      <PrivateRoute exact path="/notes/:id" component={Notes}/>
      <PublicRoute exact path="/signup" component={Signup} />
      <PublicRoute exact path="/login" component={Login} />
      <PublicRoute exact path="/" component={Home} />
      <PublicRoute component={NotFound}/>
    </Switch>
  );
}
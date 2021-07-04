import React from 'react';
import Home from "./pages/Home/Home";
import Podcast from "./pages/Podcast/Podcast";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/podcast/:id" component={Podcast}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

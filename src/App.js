import React from "react";

import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Log from "./components/Log";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HeadBar from "./components/HeadBar";

function App() {
  return (
    <Router>
    <div className="App">
      <HeadBar/>
      <Switch>
    <Route exact path ="/" component={AdminPanel}/> 
    <Route path ="/login" component={Login}/>
    <Route path="/log" component={Log}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

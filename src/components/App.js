import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'antd/dist/antd.css';
import Listing from './listing';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/data">
              <Data />
            </Route>
            <Route path="/">
              <Listing />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Data() {
    return <h2>Data</h2>;
}

export default App;

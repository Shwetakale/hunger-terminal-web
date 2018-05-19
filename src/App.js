import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'
import routes from './routes.js'
import { BrowserRouter as Routes, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header brandName="Hunger Terminal" />
         <Routes>
          <Route exact path={routes[0].path} component={routes[0].component}/>
        </Routes>
      </div>
    );
  }
}

export default App;

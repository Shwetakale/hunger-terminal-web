import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js'
import routes from './routes.js'
import { BrowserRouter as Routes, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header brandName="Hunger Terminal" />
         <Routes>
           <Switch>
           {
              routes.map((route, index) => {
                return <Route exact path={route.path} component={route.component} key={index}/>
              })
           }
          </Switch>
        </Routes>
      </div>
    );
  }
}

export default App;

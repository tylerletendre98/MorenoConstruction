import "./App.css";
import Header from "./components/Header/header";
import {Switch, Route} from 'react-router-dom'
import { Component } from "react";
import AboutMe from './pages/aboutme/AboutMe'
import ContactMe from './pages/contact-me/contactMe'
import Services from './pages/services/services'

class App extends Component {


  render(){
    return (
      <div className="App">
        <header>
          <div>
            <Header />
          </div>
        </header>
        <Switch>
          <Route  path="/aboutMe" exact component={AboutMe}/>
          <Route  path="/contactMe" exact component={ContactMe}/>
          <Route  path="/services" exact component={Services}/>
        </Switch>
      </div>
    );
  }
}

export default App;

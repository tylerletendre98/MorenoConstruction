import "./App.css";
import Header from "./components/Header/header";
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Header />
        </div>

      </header>
    </div>
  );
}

export default App;

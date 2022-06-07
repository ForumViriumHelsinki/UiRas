import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TestBox} from "./components/TestBox";
import {UirasUI} from "./components/UirasUI"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UirasUI/>
      </header>
    </div>
  );
}

export default App;

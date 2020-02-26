import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import HomePage from '../src/pages/homepage/homepage.component'

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact='true' path="/" component={HomePage}/>
          <Route exact='true' path="/shop/hats" component={HatsPage}/>
        </Switch> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;

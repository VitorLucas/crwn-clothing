import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shoppage/shop.component'
import Header from '../src/components/header/header.component'

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={HomePage}/>
          <Route exact={true} path="/shop" component={ShopPage}/>
          <Route exact={true} path="/shop/hats" component={HatsPage}/>
        </Switch> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;

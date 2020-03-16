import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

import HomePage from '../src/pages/homepage/homepage.component'
import ShopPage from '../src/pages/shoppage/shop.component'
import Header from '../src/components/header/header.component'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-signup.component'
import { auth } from './firebase/firebase.utils'

const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser:null
    }

  }


  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({ currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact={true} path="/" component={HomePage}/>
            <Route exact={true} path="/shop" component={ShopPage}/>
            <Route exact={true} path="/shop/hats" component={HatsPage}/>
            <Route exact={true} path="/signin" component={SignInSignUp}/>
          </Switch> 
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;

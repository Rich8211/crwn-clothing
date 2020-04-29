import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch} from 'react-redux';
import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

import Header from "./components/header/header";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch({type:'SET_CURRENT_USER', payload: {
            id: snapShot.id,
            ...snapShot.data()}})
        });
      }
      dispatch({type:'SET_CURRENT_USER', payload: userAuth})
    });
    return () => unsubcribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

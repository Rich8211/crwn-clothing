import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import { auth } from "./firebase/firebase.utils.js";

import Header from "./components/header/header";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubcribeFromAuth;
  }, [auth]);

  return (
    <div className="App">
      <Header currentUser = {currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

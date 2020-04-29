import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: "SET_CURRENT_USER",
            payload: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      dispatch({ type: "SET_CURRENT_USER", payload: userAuth });
    });
    return () => unsubcribeFromAuth();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;

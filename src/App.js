import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { auth } from './firebase/firebase';
import { createUserProfileDocument } from './redux/user/user.operations';
import { userLoginSignup, userInitialize } from './redux/user/user.actions';

import Home from './pages/Home/Home.page.jsx';
import Chat from './pages/Chat/Chat.page.jsx';
import Login from './pages/Login/Login.page.jsx';
import Signup from './pages/Signup/Signup.page.jsx';

import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar.component.jsx';
import Footer from './components/Footer/Footer.component.jsx'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot((snapShot) => {
            dispatch(
              userLoginSignup(
                {
                  userName: snapShot.data().userName,
                  authId: snapShot.id,
                  isLogin: true
                }
              )
            )
          });
        } else {
          dispatch(userInitialize());
        }
      });
      return () => {
        unsubscribeFromAuth();
      };
    }, [userLoginSignup]);

  return (
    <div className="App">
      <ButtonAppBar />
      <Switch>
        <Route exact path="/redux-exercise" component={Home} />
        <Route path="/redux-exercise/chat/:topic" component={Chat} />
        <Route path="/redux-exercise/login" component={Login} />
        <Route path="/redux-exercise/signup" component={Signup} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

      // <ButtonAppBar />
      // <div className="pageStyle">
      //   <CommentList />
      //   <InputArea />
      // </div>


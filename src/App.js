import React, { useEffect} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux'
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
    // const state = useSelector(state => state);
    // const [userInfo, setUserInfo] = useState({
    //   userInfo: {
    //     userName: "Visitor",
    //     authId: null,
    //     isLogin: false,
    //   },
    // });

    useEffect(() => {
      const unsubscribeFromAuth = 
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          setTimeout(() => {
            userRef.get().then(async (snapshot) => {
              console.log(snapshot.data());
              // console.log(userRef);
              const userName = await snapshot.data().userName;
              dispatch(
                userLoginSignup({
                  userName: userName,
                  authId: userRef.id,
                  isLogin: true,
                })
              );
            });
          }, 500);

        } else {
          dispatch(userInitialize());
        }
      });
      return () => {
        unsubscribeFromAuth();
      };
    }, [userLoginSignup]);

    // useEffect(()=>{
    //   console.log(state.user.userInfo);
    // })

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

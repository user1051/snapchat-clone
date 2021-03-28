import React, { useEffect } from 'react';
import './App.css';
import WebCamCapture from './WebCamCapture';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
           username: authUser.user.displayName,
           profilePic: authUser.user.photoURL,
           id: authUser.user.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
     <Router>
      {!user ? (
        <Login/>
      ) : (
        <>
        <img src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg" alt="" className="app__logo"/>
        <div className="app__body">
       <div className="app__background">
          <Switch>
           <Route path="/preview">
            <Preview/>
          </Route>
          <Route exact path="/">
            <WebCamCapture/>
          </Route>
          <Route path="/chats">
            <Chats/>
          </Route>
           <Route path="/chats/view">
            <ChatView/>
          </Route>
         </Switch>
       </div>
     </div>
     </>
      )}
    </Router>
    </div>
  );
}

export default App;

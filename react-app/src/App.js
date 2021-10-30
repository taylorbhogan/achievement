import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/parts/LoginForm';
import SignUpForm from './components/parts/SignUpForm';
import Nav from './components/Nav';
import ProtectedRoute from './components/parts/ProtectedRoute';
import User from './components/User';
import Home from './components/Home';
import Reflect from './components/Reflect';
import AchievementLog from './components/AchievementLogComponents/AchievementLog'
import HabitLog from './components/HabitLog';
import DeveloperLinks from './components/parts/DeveloperLinks';
import PageNotFound from './components/parts/PageNotFound'
import Splash from './components/parts/Splash';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <DeveloperLinks />
      <Switch>
        <ProtectedRoute path='/' exact={true} >
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path='/reflect' exact={true} >
          <Reflect />
        </ProtectedRoute>
        <ProtectedRoute path='/habits' exact={true} >
          <HabitLog />
        </ProtectedRoute>
        <ProtectedRoute path='/achievements' exact={true} >
          <AchievementLog />
        </ProtectedRoute>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/splash' exact={true}>
          <Splash />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

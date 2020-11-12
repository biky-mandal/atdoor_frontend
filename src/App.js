import React, { useEffect } from 'react';
// Imported by me Manually.
import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './Containers/Homepage';
import Signuppage from './Containers/Signuppage'
import Loginpage from './Containers/Loginpage';
import Profile_Page from './Containers/ProfilePage';
import Order_Page from './Containers/OrdersPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './Actions';
// private Route
import PrivateRoute from './Components/HOC/Private_Route';

function App() {

  const dispatch = useDispatch();
  const register = useSelector(state => state.register);

  useEffect(() => {
    if(!register.authenticate){
      dispatch(isUserLoggedIn());
    }
  })

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <PrivateRoute path="/profile" component={Profile_Page}/>
        <PrivateRoute path="/order" component={Order_Page}/>
        <Route path="/signup" component={Signuppage}/>
        <Route path="/login" component={Loginpage}/>
      </Switch>
    </div>
  );
}

export default App;

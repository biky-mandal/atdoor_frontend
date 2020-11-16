import React, { useEffect } from 'react';
// Imported by me Manually.
import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './Containers/Homepage';
import Signuppage from './Containers/Signuppage'
import Loginpage from './Containers/Loginpage';
import Profile_Page from './Containers/ProfilePage';
import Order_Page from './Containers/OrdersPage';
import Vegetable_Page from './Containers/CategoryPages/Vegetables';
import Fruit_Page from './Containers/CategoryPages/Fruits';
import DryFish_Page from './Containers/CategoryPages/DryFish';
import Grocery_Page from './Containers/CategoryPages/Grocery';
import Dairy_Page from './Containers/CategoryPages/Dairy';


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
        <Route path="/vegetables" component={Vegetable_Page} />
        <Route path="/fruits" component={Fruit_Page} />
        <Route path="/dryfishes" component={DryFish_Page} />
        <Route path="/groceries" component={Grocery_Page} />
        <Route path="/dairy" component={Dairy_Page} />

      </Switch>
    </div>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DestinationFinal from './components/DestinationFinal/DestinationFinal'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [vehicle,setVehicle]=useState();
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser,vehicle,setVehicle]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/header">
            <Header />
          </Route>

          <PrivateRoute path="/destination">
            <Destination/>
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/destinationFinal">
            <DestinationFinal />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;

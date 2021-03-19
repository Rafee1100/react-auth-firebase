import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container } from 'react-bootstrap';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login'

function App() {
  return (
   <Container className='homepage'>
     <Router>
       <Header/>
       <Switch>
         <Route path="/home">
           <Home/>
         </Route>
         <Route path="/destination">
           <Destination/>
         </Route>
         <Route path="/blog">
           <Blog/>
         </Route>
         <Route path="/contact">
           <Contact/>
         </Route>
         <Route path="/login">
           <Login/>
         </Route>

       </Switch>
     </Router>
   </Container>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Home/Services/Services';
import About from './components/About/About';
import ViewService from './components/Home/ViewService/ViewService';

import AuthContext from './context/AuthContext';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import BookAppointment from './components/BookAppointment/BookAppointment';


function App() {
  return (
    <div className="App">
      <AuthContext >
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <Route exact path="/services">
              <Services></Services>
            </Route> */}
            <PrivateRoute path="/services/:serviceName">
              <ViewService></ViewService>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute path="/bookAppointment">
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </AuthContext>
    </div>
  );
}

export default App;

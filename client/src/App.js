// import MoviesRouter from './Router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Utils
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

// Components
import {
  Register,
  Login,
  PrivateRoute,
  Home,
  NotFound,
  StudentsList,
  HeaderComponent
} from "./components";
import './App.css';

if (localStorage.jwtToken) {// Check for token to keep user logged in
  const token = localStorage.getItem("jwtToken");// Set auth token header auth
  setAuthToken(token);
  const decoded = jwt_decode(token);// Decode token and get user info and exp
  store.dispatch(setCurrentUser(decoded));// Set user and isAuthenticated
  const currentTime = Date.now() / 1000; // Check for expired token to get in milliseconds
  if (decoded.exp < currentTime) {   
    store.dispatch(logoutUser());// Logout user 
    window.location.href = "./";// Redirect to login
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <HeaderComponent />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/movies" component={StudentsList} />
            <Route
              component={localStorage.jwtToken ? Home : NotFound}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
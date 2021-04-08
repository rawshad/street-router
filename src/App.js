import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Confirmation from './Components/Confirmation/Confirmation';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/confirmation/:type">
          <Confirmation/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;

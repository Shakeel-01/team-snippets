
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './components/Details/Details';
import NoMatch from './components/NoMatch/NoMatch';


function App() {
  return (
    <div  >
      
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/details/:idTeam'>
            <Details/>
          </Route>
          <Route path='/*'>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

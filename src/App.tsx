import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './component/layout/Navbar';
import Alert from './component/layout/Alert';
import about from './component/pages/about';
import User from './component/users/User';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';
import Home from './component/pages/home';
import NotFound from './component/pages/notFound';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={about}></Route>
              <Route exact path='/user/:login' component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router >
      </AlertState>
    </GithubState>
  );
}

export default App;
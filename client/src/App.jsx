import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exect path="/home">
          <Home />
        </Route>
        <Route exect path="/">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

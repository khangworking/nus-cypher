import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogIn from './components/LogIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exect path="/">
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

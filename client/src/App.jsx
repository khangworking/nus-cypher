import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import VideoDetail from './components/VideoDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exect path="/videos/:id">
          <VideoDetail />
        </Route>
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

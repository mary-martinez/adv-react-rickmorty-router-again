import { Switch, Route } from 'react-router-dom';
import Details from './views/Details';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/character/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

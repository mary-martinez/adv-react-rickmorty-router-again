import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

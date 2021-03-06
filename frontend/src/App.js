import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import { Load } from './store/session';

export default function App () {
  const dispatch = useDispatch();

  const loaded = useSelector(state => state.session.loaded);

  useEffect(() => {
    dispatch(Load());
  }, [dispatch]);

  return loaded && (
    <>
      <NavBar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

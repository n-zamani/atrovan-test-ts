import { BrowserRouter as Router, Route, Switch, Redirect, RouteProps } from 'react-router-dom';
import { LoginPage, HomePage, DevicePage } from './pages';
import { Navbar } from './components';
import { Authenticated, RequireAuth } from './_routes';
import { GlobalStyles } from './otherStyles/App.style';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={(props: RouteProps) => <RequireAuth {...props} Component={HomePage} />}
          />
          <Route
            path="/login"
            component={(props: RouteProps) => <Authenticated {...props} Component={LoginPage} />}
          />
          <Route
            path="/device/:id"
            component={(props: RouteProps) => <RequireAuth {...props} Component={DevicePage} />}
          />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

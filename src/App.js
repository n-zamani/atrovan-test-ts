import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './_helpers/history';
import { LoginPage, HomePage, DevicePage } from './pages';
import { Navbar } from './components';
import { Authenticated, RequireAuth } from './_routes';
import { GlobalStyles } from './otherStyles/App.style';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={(props) => <RequireAuth {...props} Component={HomePage} />} />
          <Route path="/login" component={(props) => <Authenticated {...props} Component={LoginPage} />} />
          <Route path="/device/:id" component={(props) => <RequireAuth {...props} Component={DevicePage} />} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

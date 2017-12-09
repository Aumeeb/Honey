import * as React from 'react';
import { Router, Route } from 'react-router';
import * as history from 'history';
// import Home from "./routes/Home/Home";
import Header from './routes/components/Header/Header'
class App extends React.Component {
  render() {
    return (

      <Router history={history.createBrowserHistory()}>
        {/* <Route component={Home} /> */}
        <Route component={Header} />

      </Router>
    );
  }
}

export default App;

import * as React from 'react';
import { Router, Route } from 'react-router';
import * as history from 'history';
import Home from "./routes/Home/Home";

import Header from './routes/components/Header/Header'
import Footer from './routes/components/Footer/Footer'
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Router history={history.createBrowserHistory()}>
          <Route component={Home} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;

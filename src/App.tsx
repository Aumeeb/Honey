import * as React from 'react';
import { Router, Route } from 'react-router';
import * as history from 'history';
import Home from "./routes/Home/Home";
import './routes/common.css'
import Header from './routes/components/Header/Header'
import Footer from './routes/components/Footer/Footer'

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header />
          <Router history={history.createBrowserHistory()}>
            <Route component={Home} />
          </Router>
          <Footer />
        </Provider >
      </div>

    );
  }
}

export default App;

import * as React from 'react';
import { Router, Route } from 'react-router';
import * as history from 'history';
// import ZResponce from "./routes/Responce/response";
import './routes/common.css'
import Header from './routes/components/Header/Header'
import Footer from './routes/components/Footer/Footer'
import Home from './routes/Home/Home';

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
    /* <ZResponce  promise={fetch(`http://localhost:3000/monk/data.json`)}  /> */
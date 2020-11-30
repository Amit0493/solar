import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Longi from './components/longi';
import Jinko from './components/jinko';
import Qcell from './components/qcell';
import Risen from './components/risen';
import Suntech from './components/suntech';
import SunGrow from './components/sungrow';
import Fronious from './components/fronious';
import GoodWe from './components/goodwe';
import Huawei from './components/huawei';
import Saj from './components/saj';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/longi' exact component={Longi} />
          <Route path='/jinko' exact component={Jinko} />
          <Route path='/qcell' exact component={Qcell} />
          <Route path='/risen' exact component={Risen} />
          <Route path='/suntech' exact component={Suntech} />
          <Route path='/sungrow' exact component={SunGrow} />
          <Route path='/fronious' exact component={Fronious} />
          <Route path='/goodwe' exact component={GoodWe} />
          <Route path='/huawei' exact component={Huawei} />
          <Route path='/saj' exact component={Saj} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

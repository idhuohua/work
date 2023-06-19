import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';
import MainPage from './pages/MainPage';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/main">
          <Navbar />
          <MainPage />
        </Route>
        <Route path="/page2">
          <Navbar />
          <Page2 />
        </Route>
        <Route path="/page3">
          <Navbar />
          <Page3 />
        </Route>
        <Redirect to="/" /> {/* 添加重定向到 WelcomePage 的路由 */}
      </Switch>
    </Router>
  );
};

export default App;

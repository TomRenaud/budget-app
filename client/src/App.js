import React from 'react';
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/** HEADER **/
import { Header } from "./components/Header";

/** PAGES **/
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import NotFound from './pages/NotFound';

/** FR LOCALE **/
import locale from "antd/es/locale/fr_FR";

export const App = () => {
  return (
      <ConfigProvider locale={locale}>
        <div>
          <Header />
          <Router>
            <div>
              <Switch>
                <Route path="/home" exact={true}>
                  <Home />
                </Route>
                <Route path="/statistics" exact={true}>
                  <Statistics />
                </Route>
                <Route path="*" exact={true}>
                  <NotFound />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </ConfigProvider>
  );
};

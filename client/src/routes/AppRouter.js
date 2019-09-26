import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main';
import Search from '../components/Search';
import Items from '../components/Items';
import NotFound from '../components/NotFound';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Main} exact={true} />
            <Route path="/items" component={Search} exact={true} />
            <Route path="/items/:id" component={Items} exact={true} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default AppRouter;

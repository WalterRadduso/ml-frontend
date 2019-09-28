import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// Import Components
import Item from '../components/Item';
import Items from '../components/Items';
import NotFound from '../components/NotFound';
import SearchInput from '../components/SearchInput';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={SearchInput} exact={true} />
            <Route path="/items" component={Items} exact={true} />
            <Route path="/items/:id" component={Item} exact={true} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default AppRouter;

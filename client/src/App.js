import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import getAppStore from './store';
import AppRouter from './routes/AppRouter';

const store = getAppStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Helmet titleTemplate="%s - ML Frontend" defaultTitle="Test Práctico - ML Frontend">
                    <meta charSet="utf-8"/>
                    <meta name="description"
                          content="Test práctico para aspirantes al área de front-end de Mercado Libre."/>
                </Helmet>
                <AppRouter/>
            </Provider>
        );
    }
}

export default App;

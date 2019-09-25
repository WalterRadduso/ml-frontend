import React, { Component } from 'react';
import { Provider } from 'react-redux';

import getAppStore from './store';
import AppRouter  from './routes/AppRouter';

const store = getAppStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}

export default App;

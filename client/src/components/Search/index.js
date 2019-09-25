import React, { Component } from 'react';
import { parse } from 'query-string';

import { history } from '../../routes/AppRouter';

import './styles.scss';

class Search extends Component {
    render() {
        const { location: { search } } = this.props;

        const searchText = parse(search);

        console.log('SEARCH: ', searchText);

        if (Object.entries(searchText).length === 0 || !searchText.search) {
            history.push('/');
        }

        return (
            <div className="Main">
                <header className="Main-header">
                    <p style={{textAlign: 'center'}}>
                        SEARCH
                    </p>
                </header>
            </div>
        );
    }
}

export default Search;

import React, { Component } from 'react';

import './styles.scss';
import { history } from "../../routes/AppRouter";

class Items extends Component {
    render() {
        const { match: { params: { id } } } = this.props;

        console.log('ITEM: ', id);

        if (!id) {
            history.push('/');
        }

        return (
            <div className="Main">
                <header className="Main-header">
                    <p style={{textAlign: 'center'}}>
                        ITEM
                    </p>
                </header>
            </div>
        );
    }
}

export default Items;

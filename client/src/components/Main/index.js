import React, { Component } from 'react';
import { parse } from 'query-string';

import logo from "../../logo.svg";

import './styles.scss';

class Main extends Component {
    render() {
        const { location: { search } } = this.props;

        console.log(parse(search));

        return (
            <div className="Main">
                <header className="Main-header">
                    <p style={{textAlign: 'center'}}>
                        HOME
                    </p>
                </header>
            </div>
        );
    }
}

export default Main;

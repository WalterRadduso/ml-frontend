import React, { Component } from 'react';
import {
    Button,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { history } from '../../routes/AppRouter';

// Import Components
import Main from '../Main';

// Import Images and Style.
import logoML from '../../assets/images/logo_ML.png';
import search from '../../assets/images/ic_search.png';
import './styles.scss';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputSearch: ''
        };

        // Initialize the local functions.
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.moveToSearchItem = this.moveToSearchItem.bind(this);
    }

    componentDidMount() {
        const { inputSearch } = this.props;

        if (inputSearch) {
            this.setState({
                inputSearch
            });
        }
    }

    // Save the value typed by the user.
    updateInputValue(e) {
        this.setState({
            inputSearch: e.target.value
        });
    }

    // Go to search the user text.
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.moveToSearchItem();
        }
    }

    // Move to the other page if the inputSearch is not empty.
    moveToSearchItem() {
        if (this.state.inputSearch) {
            history.push(`/items?search=${this.state.inputSearch}`);
        }
    }

    render() {
        const { inputSearch } = this.state;

        return (
            <Main>
                <Row className="mainPage">
                    <Col xs="12" sm={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col xs="1" className="logoContainer">
                                <Link to={'/'}>
                                    <img className="logoML" src={logoML} alt="Logo ML" />
                                </Link>
                            </Col>

                            <Col xs="11">
                                <InputGroup>
                                    <Input
                                        className="searchInput"
                                        placeholder="Nunca dejes de buscar"
                                        onChange={e => this.updateInputValue(e)}
                                        onKeyDown={this.handleKeyDown}
                                        value={inputSearch}
                                        name="search"
                                    />

                                    <InputGroupAddon addonType="append" className="inputRightAppend">
                                        <InputGroupText className="inputRightText">
                                            <Button onClick={this.moveToSearchItem}>
                                                <img className="searchMagnet" src={search} alt="Lupa"/>
                                            </Button>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Main>
        );
    }
}

export default SearchInput;

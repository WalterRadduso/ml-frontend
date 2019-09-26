import React, { Component } from 'react';
import {
    Button,
    Container,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';

import { history } from '../../routes/AppRouter';

// Import ML Logo.
import logoML from '../../assets/images/logo_ML.png';
import search from '../../assets/images/ic_search.png';
import './styles.scss';

class Main extends Component {
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
        return (
            <Container fluid={true} className="mainPage">
                <Row>
                    <Col xs="12" sm={{ size: 10, order: 2, offset: 1 }}>
                        <Row>
                            <Col xs="1" className="logoContainer">
                                <img className="logoML" src={logoML} alt="Logo ML" />
                            </Col>

                            <Col xs="11">
                                <InputGroup>
                                    <Input
                                        className="searchInput"
                                        placeholder="Nunca dejes de buscar"
                                        onChange={e => this.updateInputValue(e)}
                                        onKeyDown={this.handleKeyDown}
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
            </Container>
        );
    }
}

export default Main;

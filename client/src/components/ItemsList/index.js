import React, { Component } from 'react';
import { Col, Row } from "reactstrap";

// Import Components
import Categories from "./Categories";
import Items from "./Items";

// Import Style
import './styles.scss';

class ItemsList extends Component {
    render() {
        const { items: { searchResult: { categories, items } } } = this.props;

        console.log(items);

        return (
            <Row>
                <Col xs="12" sm={{ size: 10, offset: 1 }}>
                    <Categories categories={categories} />
                    <Items items={items} />
                </Col>
            </Row>
        );
    }
}

export default ItemsList;

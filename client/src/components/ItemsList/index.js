import React, { Component } from 'react';
import { Col, Row } from "reactstrap";

// Import Components
import Categories from "../Categories";
import ShowItems from "./ShowItems";

// Import Style
import './styles.scss';

class ItemsList extends Component {
    render() {
        const { items: { searchResult: { categories, items } } } = this.props;

        return (
            <Row>
                <Col xs="12" sm={{ size: 10, offset: 1 }} className="itemsSearch">
                    <Categories categories={categories} />
                    <ShowItems items={items} />
                </Col>
            </Row>
        );
    }
}

export default ItemsList;

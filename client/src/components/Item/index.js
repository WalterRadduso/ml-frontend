import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";

import { history } from "../../routes/AppRouter";

// Import Components
import SearchInput from "../SearchInput";
import Main from "../Main";

// Import Actions
import { getItem } from '../../actions/items';

// Import Components
import Loading from "../Loading";
import ShowItem from "./ShowItem";
import Categories from "../Categories";

// Import Styles.
import './styles.scss';
import { Col, Row } from "reactstrap";

class Item extends Component {
    constructor(props) {
        super(props);

        this.getItemId = this.getItemId.bind(this);
        this.showItemObtained = this.showItemObtained.bind(this);
    }

    componentDidMount() {
        this.getItemId();
    }

    componentDidUpdate(prevProps) {
        const { match: { params: { id } } } = this.props;

        // If the values to search are different I get the the new items from API.
        if (id !== prevProps.match.params.id) {
            // Clean the previous search.
            this.props.getItem();

            // Search again with the new text.
            this.props.getItem();
        }
    }

    getItemId() {
        const { match: { params: { id } } } = this.props;

        if (!id) {
            history.push('/');
            return false;
        }

        this.props.getItem(id);
    }

    showItemObtained() {
        const { items: { itemObtained } } = this.props;

        return (
            (itemObtained && Object.entries(itemObtained).length > 0) ?
                <Row>
                    <Col xs="12" sm={{ size: 10, offset: 1 }}>
                        <Categories categories={itemObtained.categories} />
                        <ShowItem item={itemObtained} />
                    </Col>
                </Row>
                :
                <Loading/>
        )
    }

    render() {
        const { items: { itemObtained } } = this.props;

        return (
            <React.Fragment>
                <Helmet>
                    <title>{(itemObtained && Object.entries(itemObtained).length > 0) ? itemObtained.title : null}</title>
                </Helmet>

                <SearchInput inputSearch={''} />

                <Main>
                    {this.showItemObtained()}
                </Main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

export default connect(mapStateToProps, { getItem })(Item);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

import { history } from "../../routes/AppRouter";

// Import Actions
import { getItem } from '../../actions/items';

// Import Components
import Categories from "../Categories";
import ErrorMessages from "../ErrorMessages";
import Loading from "../Loading";
import Main from "../Main";
import SearchInput from "../SearchInput";
import ShowItem from "./ShowItem";

// Import Styles.
import './styles.scss';

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

    // Ge the item data from API.
    getItemId() {
        const { match: { params: { id } } } = this.props;

        if (!id) {
            history.push('/');
            return false;
        }

        this.props.getItem(id);
    }

    // Show the data of the item Obtained.
    showItemObtained() {
        const { items: { itemObtained } } = this.props;

        // If the item obtained is empty (API error or ID doesn't exist).
        if (itemObtained && Object.entries(itemObtained).length > 0) {
            if (itemObtained.result === 'empty') {
                return <ErrorMessages message="El producto que intenta abrir no existe, pruebe con buscar nuevamente."/>;
            }
        }

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

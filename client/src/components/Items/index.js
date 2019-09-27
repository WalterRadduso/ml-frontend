import React, { Component } from 'react';
import { parse } from 'query-string';
import { connect } from 'react-redux';

import { history } from '../../routes/AppRouter';

// Import Actions
import { getItems } from '../../actions/search';

// Import Components
import Main from '../Main';
import SearchInput from '../SearchInput';
import Loading from '../Loading';
import ItemsList from '../ItemsList';

// Import Style
import './styles.scss';

class Items extends Component {
    constructor(props) {
        super(props);

        this.getSearchItems = this.getSearchItems.bind(this);
        this.getSearchText = this.getSearchText.bind(this);
        this.checkSearchResult = this.checkSearchResult.bind(this);
    }

    componentDidMount() {
        this.getSearchItems();
    }

    componentDidUpdate(prevProps) {
        const { location: { search } } = this.props;

        // If the values to search are different I get the the new items from API.
        if (search !== prevProps.location.search) {
            // Clean the previous search.
            this.props.getItems('');

            // Search again with the new text.
            this.getSearchItems();
        }
    }

    // Get items from API.
    getSearchItems() {
        const searchText = this.getSearchText();

        if (searchText) {
            this.props.getItems(searchText.search);
        }
    }

    // Get the text form the URL.
    getSearchText() {
        const { location: { search } } = this.props;
        let searchText = parse(search);

        if (Object.entries(searchText).length === 0 || !searchText.search) {
            history.push('/');
            return false;
        }

        return searchText;
    }

    // Check if the request returns with data.
    checkSearchResult() {
        const { search } = this.props;

        let showLoading = true;

        if (Object.entries(search).length !== 0) {
            if (search.searchResult.items.length > 0) {
                showLoading = false;
            }
        }

        return (
            (showLoading) ? <Loading/> : <ItemsList items={search} />
        );
    }

    render() {
        const searchText = this.getSearchText();

        return (
            <React.Fragment>
                <SearchInput inputSearch={searchText.search} />

                <Main>
                    {this.checkSearchResult()}
                </Main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

export default connect(mapStateToProps, { getItems })(Items);

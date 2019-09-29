import React from 'react';
import { Col, Row } from "reactstrap";

// Import Components
import Main from "../Main";
import SearchInput from '../SearchInput';

// Import Images and Styles
import error404 from '../../assets/images/error_404.png';
import './styles.scss';

export default () => (
    <React.Fragment>
        <SearchInput inputSearch={''} />

        <Main>
            <Row>
                <Col xs="12" sm={{ size: 10, offset: 1 }} className="error404 marginTop16">
                    <img src={error404} alt="Error 404"/>
                    <h6 className="marginTop16">Página no encontrada, intente realizar una búsqueda.</h6>
                </Col>
            </Row>
        </Main>
    </React.Fragment>
);

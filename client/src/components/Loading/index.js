import React from 'react';
import loader from '../../assets/images/loader.gif';
import { Col, Row } from "reactstrap";

// Import Components
import Main from "../Main";

// Import Styles.
import './styles.scss';

export default () => (
    <Main>
        <Row>
            <Col xs="12" sm={{ size: 10, offset: 1 }} className="loader marginTop16">
                <img src={loader} alt="Cargando" />
                <span>Cargando...</span>
            </Col>
        </Row>
    </Main>
);

import React from 'react';
import loader from '../../assets/images/loader.gif';
import { Col, Row } from "reactstrap";

// Import Styles.
import './styles.scss';

export default () => (
    <Row>
        <Col xs="12" className="loader">
            <img src={loader} alt="Cargando" />
            <span>Cargando...</span>
        </Col>
    </Row>
);

import React from 'react';
import { Col, Row } from "reactstrap";

// Import Components
import Main from "../Main";

// Import Styles.
import './styles.scss';

export default ({ message }) => (
    <Main>
        <Row>
            <Col xs="12" sm={{ size: 10, offset: 1 }} className="emptySearch marginTop16">
                <p>{ message }</p>
            </Col>
        </Row>
    </Main>
);

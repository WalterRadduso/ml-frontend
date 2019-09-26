import React  from 'react';
import {
    Container,
    Col,
    Row
} from 'reactstrap';

import './styles.scss';

const Main = ({ children }) => (
    <Container fluid={true}>
        <Row>
            <Col xs="12">
                {children}
            </Col>
        </Row>
    </Container>
);

export default Main;

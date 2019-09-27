import React  from 'react';
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

import freeShipping from '../../assets/images/ic_shipping.png';
import './styles.scss';

export default ({ items }) => (
    <Row className="itemsList marginTop16">
        {items.map((item, key) => {
            return (
                <Col xs="12" key={key} >
                    <Link to={`/items/${item.id}`}>
                        <div className="item">
                            <img className="itemImage" src={item.picture} alt="Imagen del Producto"/>

                            <div className="itemDescription">
                                <div className="itemPriceTitle">
                                    <div className="price marginTop16 marginBottom32">
                                        <p>
                                            $ {item.price.amount}
                                        </p>

                                        {item.free_shipping ? <img className="freeShipping" src={freeShipping} alt=""/> : null}
                                    </div>

                                    <h5 className="title">{item.title}</h5>
                                </div>
                            </div>
                        </div>

                        <hr className="separator"/>
                    </Link>
                </Col>
            )
        })}
    </Row>
);

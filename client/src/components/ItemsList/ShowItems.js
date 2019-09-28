import React  from 'react';
import { Link } from "react-router-dom";

import freeShipping from '../../assets/images/ic_shipping.png';
import './styles.scss';
import NumberFormat from "react-number-format";

const transformPrice = (price) => {
    const priceDivided = price.toString().split('.');

    return (
        <React.Fragment>
            <NumberFormat value={priceDivided[0]} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />
            <span className="priceDecimal">{priceDivided[1]}</span>
        </React.Fragment>
    );
};

export default ({ items }) => (
    <div className="itemsList marginTop16">
        {items.map((item, key) => {
            return (
                <div key={key} className="item">
                    <Link to={`/items/${item.id}`} className="itemLink">
                        <div className="itemContent">
                            <img className="itemImage" src={item.picture} alt="Imagen del Producto"/>

                            <div className="itemDescription">
                                <div className="itemText">
                                    <div className="itemTopText marginTop32 marginBottom32">
                                        <div className="itemPrice">
                                            <p className="price">
                                                {transformPrice(item.price.amount)}
                                            </p>

                                            {item.free_shipping ? <img className="freeShipping" src={freeShipping} alt=""/> : null}
                                        </div>

                                        <div className="itemState">
                                            <span>{item.state}</span>
                                        </div>
                                    </div>

                                    <h5 className="itemTitle">{item.title}</h5>
                                </div>
                            </div>
                        </div>

                        <hr className="separator"/>
                    </Link>
                </div>
            )
        })}
    </div>
);

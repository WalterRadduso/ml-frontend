import React from 'react';
import { Button } from 'reactstrap';
import NumberFormat from 'react-number-format';

// Import Styles
import './styles.scss';

const translateCondition = (condition, uppercase = false) => {
    let newCondition = null;

    if (condition === 'new') {
        newCondition = 'nuevo';
    }

    if (condition === 'used') {
        newCondition = 'usado';
    }

    // Make the first letter uppercase
    if (newCondition && uppercase) {
        newCondition = newCondition.charAt(0).toUpperCase() + newCondition.slice(1);
    }

    return newCondition;
};

const transformPrice = (price) => {
    const priceDivided = price.toString().split('.');

    return (
        <React.Fragment>
            <NumberFormat value={priceDivided[0]} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />
            <span className="priceDecimal">{priceDivided[1]}</span>
        </React.Fragment>
    );
};

export default ({ item }) => (
    <div className="itemObtained marginTop16">
        <div className="itemTopInfo">
            <img className="itemImage" src={item.picture} alt="Imagen del Producto"/>

            <div className="itemInfo marginTop32">
                <p className="itemCondition">
                    {translateCondition(item.condition, true)} - {item.sold_quantity} vendidos
                </p>

                <h5 className="itemTitle marginBottom32">
                    {item.title}
                </h5>

                <h5 className="itemPrice marginBottom32">
                    {transformPrice(item.price.amount)}
                </h5>

                <h5 className="itemButton">
                    <Button href={item.permalink} target="_blank" color="primary" size="md" className="btnBuy">
                        Comprar
                    </Button>
                </h5>
            </div>
        </div>

        <div className="itemDescription">
            <h4 className="marginBottom32 itemTitle">Descripción del producto</h4>

            <p className="itemText">{item.description}</p>
        </div>
    </div>
);

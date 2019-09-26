import React from 'react';

import './styles.scss';

export default ({ items }) => (
    <div className="itemsList marginTop16">
        {items.map((item, key) => {
            return (
                <div key={key} className="item">
                    <img src={item.picture} alt="Imagen del Producto"/>
                    <h5>{item.title}</h5>
                    <p>{item.price.amount}</p>
                    <p>{item.city}</p>
                </div>
            )
        })}
    </div>
);

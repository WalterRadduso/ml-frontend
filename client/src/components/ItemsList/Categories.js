import React from 'react';

import './styles.scss';

export default ({ categories }) => (
    (Object.entries(categories).length > 0) ?
        <ul className="itemsCategory marginTop16 marginBottom16">
            {categories.map((category, key) => {
                return (
                    <li key={key}>
                        <span>{category}</span>
                        <span className="chevron-right"></span>
                    </li>
                )
            })}
        </ul>
    : null
);

import express from 'express';
import axios from 'axios';

const router = express.Router();

// Search endpoint.
router.post('/search', async function (req, res) {
    const getSearch = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.body.search);
    const results = getSearch.data.results;

    const size = 4;
    let products = results.slice(0, size).map(product => {
        return {
            id: product.id,
            title: product.title,
            price: {
                currency: product.installments.currency_id,
                amount: product.installments.amount
            },
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city: product.seller_address.city.name,
            category: product.category_id
        };
    });

    res.send(products);
});

async function getCategoryName(categoryId) {
    const getCategory = await axios.get('https://api.mercadolibre.com/categories/' + categoryId);
    const { path_from_root } = getCategory.data;

    return path_from_root.map(path => {
        return path.name;
    });
}

module.exports = router;

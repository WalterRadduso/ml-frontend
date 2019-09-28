import express from 'express';
import axios from 'axios';

const router = express.Router();

// Search endpoint.
router.get('/search', async function (req, res) {
    try {
        const getSearch = await axios.get(`${process.env.ML_API}/sites/MLA/search?q=${req.query.q}`);
        const { filters, results } = getSearch.data;

        const size = 4;
        let products = results.slice(0, size).map(product => {
            return {
                id: product.id,
                title: product.title,
                price: {
                    currency: product.currency_id,
                    amount: product.price
                },
                picture: product.thumbnail,
                condition: product.condition,
                free_shipping: product.shipping.free_shipping,
                state: product.seller_address.state.name,
            };
        });

        let searchedItems = {
            categories: {},
            items: products
        };

        if (filters.length > 0) {
            searchedItems = {
                categories: getCategoryName(filters),
                items: products
            };
        }

        res.send({
            code: 200,
            success: true,
            data: searchedItems
        });
    } catch (e) {
        res.boom.badRequest();
    }
});

function getCategoryName(filters) {
    const { path_from_root } = filters.shift().values.shift();

    return path_from_root.map(path => {
        return path.name;
    });
}

module.exports = router;

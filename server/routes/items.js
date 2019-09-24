import express from 'express';
import axios from 'axios';

const router = express.Router();

// Item endpoint.
router.get('/items/:id', async function (req, res) {
    try {
        const itemId = req.params.id;
        const getItem = await axios.get('https://api.mercadolibre.com/items/' + itemId);
        const product = getItem.data;

        const item = {
            id: product.id,
            title: product.title,
            price: {
                currency: product.currency_id,
                amount: product.price
            },
            picture: product.pictures.shift().url,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city: product.seller_address.city.name,
            categories: await getCategories(product.category_id),
            sold_quantity: product.sold_quantity,
            description: await getDescription(itemId)
        };

        res.send({
            code: 200,
            success: true,
            data: item
        });
    } catch (e) {
        res.boom.badRequest();
    }
});

async function getCategories(categoryId) {
    const getCategory = await axios.get('https://api.mercadolibre.com/categories/' + categoryId);
    const { path_from_root } = getCategory.data;

    return path_from_root.map(path => {
        return path.name;
    });
}

async function getDescription(itemId) {
    const getCategory = await axios.get('https://api.mercadolibre.com/items/' + itemId + '/description');
    return getCategory.data.plain_text;
}

module.exports = router;

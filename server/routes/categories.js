import express from 'express';
import axios from 'axios';

const router = express.Router();

// Category endpoint.
router.get('/categories/:id', async function (req, res) {
    try {
        const getCategory = await axios.get('https://api.mercadolibre.com/categories/' + req.params.d);

        res.send({
            code: 200,
            success: true,
            data: getCategory.data
        });
    } catch (e) {
        res.boom.notFound();
    }
});

module.exports = router;

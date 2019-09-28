import express from 'express';
import axios from 'axios';

const router = express.Router();

// Category endpoint.
router.get('/descriptions/:id', async function (req, res) {
    try {
        const getDescription = await axios.get(`${process.env.ML_API}/items/${req.params.d}/description`);

        res.send({
            code: 200,
            success: true,
            data: getDescription.data
        });
    } catch (e) {
        res.boom.notFound();
    }
});

module.exports = router;

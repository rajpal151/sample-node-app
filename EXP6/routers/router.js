const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

router.post('/', (req, res) => {
    controller.postCat(req, res);
});
router.delete('/', (req, res) => {
    controller.Deletecat(req, res);
});

module.exports = router;


(function() {

    'use strict';

    const express = require('express');
    const router = express.Router();

    router.use(require('./routes/todo.route'));


    router.get('/', (req, res) => {
        res.status(200).json("Server up and running")
    });

    module.exports = router;


}());

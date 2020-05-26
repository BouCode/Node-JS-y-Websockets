const express = require ('express');
const response = require ('../../network/response');
const controller = require ('./controller')
const router = express.Router();

router.post ('/', function (req, res) {
    controller.addUser (req.body.name)
        .then ((data) => {
            response.success (req, res, data, 201);
        })
        .catch( e => {
            response.error (req, res, 'Internal error', 500, e)
        })
})

router.get ('/', (req, res) => {
    const filterUser = req.query.user || null;
    controller.getUsers (filterUser)
        .then ((UserList) => {
            response.success (req, res, UserList, 200);
        })
        .catch ((e) => {
            response.error (req, res, 'Unexpected Error', 500, e);
        })
})

module.exports = router;
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
	const filterMessages = req.query.user || null;
	controller
		.getMessages(filterMessages)
		.then((messageList) => {
			response.success(req, res, messageList, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Unexpected Error', 500, e);
		});
});
router.post('/', (req, res) => {
	controller
		.addMessage(req.body.chat, req.body.user, req.body.message)
		.then((fullMessage) => {
			response.success(req, res, fullMessage, 201);
		})
		.catch((e) => {
			response.error(req, res, 'Informacion invalida', 400, 'Error en el contenido', e);
		});
});
router.patch('/:id', (req, res) => {
	console.log(req.params.id);
	controller
		.updateMessage(req.params.id, req.body.text)
		.then((data) => {
			response.success(req, res, data, 200);
		})
		.catch((e) => {
			response.error(req, res, 'Error Interno', 500, e);
		});
});

router.delete('/:id', (req, res) => {
	controller
		.deleteMessage(req.params.id)
		.then(() => {
			response.success(req, res, `Usuario ${req.params.id} eliminado`);
		})
		.catch((e) => {
			response.error(req, res, 'Error interno', 500, e);
		});
});
module.exports = router;

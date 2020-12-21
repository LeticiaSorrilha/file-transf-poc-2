const express = require('express');
const router = express.Router();
const { upload, afterUpload } = require('../middleware/multerConfig.middleware');
const { uploadFile } = require('../controller/Files.controller');

router.post('/atendimentos/v1/cliente/:id_cliente/upload-arquivo', [
    upload.single('file'),
    afterUpload],
    uploadFile);

module.exports = router;
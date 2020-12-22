const express = require('express');
const router = express.Router();
const { upload, afterUpload } = require('../middleware/multerConfig.middleware');
const { uploadFile, downloadFile } = require('../controller/Files.controller');

router.post('/atendimentos/v1/cliente/:id_cliente/upload-arquivo', [
    upload.single('file'),
    afterUpload],
    uploadFile);

router.get('/arquivos/v1/:filename',downloadFile);//cria a rota para download de arquivo

module.exports = router;
const { uploadFile, downloadFile } = require('../../core/services/Files.service');

class FilesController {

    async uploadFile(req, res) {
        try {

            const { params, file, body } = req;

            console.log("TESTE DO BODY ::: ", body);

            const result = await uploadFile(params.id_cliente, file);

            console.log(result);

            res.status(201).send({ message: 'Seu arquivo foi salvo com sucesso!' });

        } catch (error) {

            const { message, stack } = error;
            res.status(500).send({ message, stack });
        }
    }

    async downloadFile(req, res) {
        try {
            const { params } = req; //pega os parametros passados na URL do HttpGet
            const result = await downloadFile(params.filename);//passa o nome do arquivo para a função de download
            console.log(result);
            res.status(201).send(result);//retorna o arquivo codificado
        } catch (error) {
            const { message, stack } = error;
            res.status(500).send({ message, stack });
        }
    }
}

module.exports = new FilesController();
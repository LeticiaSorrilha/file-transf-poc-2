const { uploadFile } = require('../../core/services/Files.service');

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
}

module.exports = new FilesController();
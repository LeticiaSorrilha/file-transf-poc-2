const fs = require('fs');

class FilesService {

    uploadFile(cpf, file) {
        console.log('CPF DO CLIENTE:', cpf);

        return new Promise((resolve, reject) => {

            const biteArray = new Uint8Array(file.buffer);

            fs.writeFile(`upload/${file.originalname}`, biteArray, (err) => {
                if (!err) return resolve({message: 'CREATED'});

                reject(err);
            });
        });
    }

    downloadFile(fileName) {
        return new Promise((res, reject) => {

            fs.readFile(`upload/${fileName}`,//lê o arquivo da pasta upload
                {encoding: 'base64'}, //codifica o retorno para base64
                function(err, data) { //funcao de retorno do arquivo ja codificado
                    if(!err) return res(data);
                    reject(err);
                });
        });

    }
}

module.exports = new FilesService();
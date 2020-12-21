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
}

module.exports = new FilesService();
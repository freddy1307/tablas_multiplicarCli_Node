const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, err => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        })
    })
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido en base no es un numero');
            return;
        }
        if (!Number(limite)) {
            reject('El valor introducido en limite no es un numero');
            return;
        }
        console.log('==================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('==================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} x ${i} = ${base*i}`.red);
        }
        resolve('Exito');
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}
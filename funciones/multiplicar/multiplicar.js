const fs = require('fs');
const colors = require('colors');

/* Metodo para hacerlo por promesa
const crearArchivo = (multiplicando = 5) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        salida += '****************************\n';
        salida += `Tabla de multiplicar del ${multiplicando}\n`;
        salida += '****************************\n';
        for (let i = 1; i < 11; i++) {
            salida += `${multiplicando} x ${i} = ${5 * i}\n`;
        }
        console.log(salida);
        fs.writeFileSync(`tabla-${multiplicando}.txt`, salida)
        return resolve(`tabla-${multiplicando}.txt`);
    });
}*/
//Metodo para hacerlo asincrono
const crearArchivo = async(multiplicando = 5, listar, hasta) => {
    let salida = '';
    try {
        salida += '******************************\n';
        salida += `Tabla de multiplicar del ${multiplicando}\n`;
        salida += '******************************\n';
        for (let i = 1; i <= hasta; i++) {
            salida += `${multiplicando} 'x' ${i} '=' ${multiplicando * i}\n`;
        }
        if (listar) console.log(salida.rainbow);
        fs.writeFileSync(`./salida/tabla-${multiplicando}.txt`, salida)
        return `tabla-${multiplicando}.txt`;
    } catch (err) {
        throw `ERROR: ${err}`;
    }
}

module.exports = {
    crearArchivo
    /** De esta manera se podría llamar el método si se quiere otro nombre
     * functionx: crearArchivo */
}
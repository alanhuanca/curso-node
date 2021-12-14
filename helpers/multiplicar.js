const { rejects } = require('assert');
const fs = require('fs');

const crearArchivo = async (base = 5) => {

    // return new Promise((resolve,reject)=>{
    //     console.log('===============');
    //     console.log('Tabla del ', base);
    //     console.log('===============');

    //     let salida = '';

    //     for (let i = 0; i < 10; i++) {
    //         salida += `${base} x ${i} = ${base * i}\n`
    //     }
    //     console.log(salida);

    //     fs.writeFileSync(`Tabla del ${base}.txt`,salida);
    //     resolve(`Tabla- ${base}.txt`);
    // });

    try {
        console.log('===============');
        console.log('Tabla del ', base);
        console.log('===============');

        let salida = '';

        for (let i = 0; i < 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        console.log(salida);

        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida);
        return `Tabla- ${base}.txt`

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}   
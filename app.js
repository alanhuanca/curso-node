const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option('b',
        {
            alias: 'base',
            demandOption: true,
            default: 5,
            describe: 'tabla de multiplicar',
            type: 'number'
        })
    .argv;


console.clear();
console.log(process.argv);
console.log(argv);

const [,,arg3='base=5']=process.argv;
const [,base=5]=arg3.split('=')
console.log(arg3,base);


crearArchivo(base).then(console.log)
.catch(err=>console.log(err));
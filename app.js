const {crearArchivo} = require('./funciones/multiplicar/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');
console.clear();
//Información de los argumentos por consola
//console.log(process.argv); //Muestra información de la ruta de aplicación y de nodeJS
console.log(argv);  //Mostrar información del objeto yargs
//console.log(argv.base); Mostrar el campo base del objeto yargs
/*const [,,arg3 = 'base = 5'] = process.argv;
const [, base = 5] = arg3.split('=');
console.log(arg3, base);*/
crearArchivo(argv.base, argv.listar, argv.hasta)
    .then((resultado) => console.log(colors.bgWhite.black(resultado, 'creado')))
    .catch((err) => console.log(colors.bgRed(err)));
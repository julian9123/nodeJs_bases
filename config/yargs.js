const argv = require('yargs').option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Base de la tabla de multiplicar'
            }).option('l', {
                alias: 'listar',
                type: 'boolean',
                describe: 'Muestra la tabla de multiplicar en consola'
            }).option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Hasta que numero ira la tabla de multiplicar'
            }).check((argv, options) => {
                if (isNaN(argv.base)) throw `base tiene que ser un numero`;
                if (isNaN(argv.hasta)) throw `hasta tiene que ser ser un numero`;
                if (!argv.listar) argv.listar = false;
                return true;
            }).argv;

module.exports = argv;
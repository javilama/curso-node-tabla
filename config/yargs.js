const colors = require('colors');
const argv = require('yargs')
    .option('b',{
         alias:'base',
         type:'number',
         demandOption: true,
         describe: 'es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        // demandOption:true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        // demandOption:true,
        default: 10,
        describe: 'Limite hasta donde se realizara la tabla de multiplicar'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw colors.red('la base debe ser un número');
        }
        return true;
    })
    .check((argv,options)=>{
        if(isNaN(argv.h)){
            throw colors.red('El limite debe ser un número');
        }
        return true;
    })
       .argv;

       module.exports = argv;
const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, list = false, limit = 10) => {
  try {
    let salida,salidaConsola = '';
    for (let i = 1; i <= limit; i++) {
      salida += `${base} x ${i} = ${base*i}\n`;
      salidaConsola += `${colors.cyan(base)} ${'x'.yellow} ${colors.cyan(i)} ${'='.yellow} ${colors.green(base * i)}\n`;
      
    }
    if (list) {
      console.log('========================'.green);
      console.log("Tabla del: ".rainbow,colors.cyan(base));
      console.log("========================".green);
      console.log(salidaConsola);
    }

    fs.writeFileSync(`./salida/Tabla-del-${base}.txt`,salida);
    return `Tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo
};

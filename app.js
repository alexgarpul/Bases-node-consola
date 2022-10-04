require('colors')

const {crearArchivo} = require('./herlpers/multiplicar')
const argv = require('./herlpers/yargs')
 
console.clear()

crearArchivo(argv.b, argv.l, argv.h).then((nombreArchivo) => console.log(`Se ha creado el archivo ${nombreArchivo.red}`)).catch((error)=>console.log(error
))
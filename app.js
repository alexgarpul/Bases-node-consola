const {crearArchivo} = require('./herlpers/multiplicar')
console.clear()

const base= 27


crearArchivo(base).then((nombreArchivo) => console.log(`Se ha creado el archivo ${nombreArchivo}`)).catch((error)=>console.log(error
))
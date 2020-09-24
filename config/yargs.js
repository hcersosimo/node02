const opcionesCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const opcionesActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opcionesCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opcionesActualizar)
    .command('borrar', 'Borra una tarea', opcionesCrear)
    .help()
    .argv;

module.exports = {
    argv
};
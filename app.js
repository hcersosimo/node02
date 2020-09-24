const argv = require('./config/yargs').argv;

const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

const comando = argv._[0];

switch (comando) {
    case 'crear':
        const tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        const listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Por Hacer======'.green);
            console.log(`${tarea.descripcion}`);
            console.log(`Compleado: ${tarea.completado}`);
            console.log('====================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}
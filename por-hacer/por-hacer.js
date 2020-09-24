//const { require } = require("yargs");

let fs = require('fs');

let tareas = [];

const cargarDB = () => {
    try {

        tareas = require('../DB/data.json');

    } catch (error) {
        tareas = [];
    }

}

const guardarDB = () => {
    const data = JSON.stringify(tareas);

    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) throw new error('No se pudo grabar', err);
    });
}

const crear = (descripcion) => {

    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    tareas.push(tarea);

    guardarDB();

    return tarea;
}

const getListado = () => {
    cargarDB();
    return tareas;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareas.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const borrar = (descripcion) => {
    cargarDB();

    let nuevasTareas = tareas.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevasTareas.length === tareas.length) {
        return false;
    } else {
        tareas = nuevasTareas;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
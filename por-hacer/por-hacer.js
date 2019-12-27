const colors = require('colors');
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(tarea);
    guardarDB();
    return tarea;
}
const getListado = () => {
    cargarDB();
    for (const tarea of listadoPorHacer) {
        console.log('============Por Hacer==============='.green);
        console.log('TAREA: ', tarea.descripcion);
        console.log('ESTADO: ', tarea.completado);
        console.log('===================================='.green);
    }
    return 'Fin del listado de tareas';
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return `Tarea: ${listadoPorHacer[index].descripcion} actualizada a ${listadoPorHacer[index].completado}`;
    } else {
        return `Tarea: ${descripcion} no encontrada`;
    }
}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return `Tarea: ${descripcion} eliminada`;
    } else {
        return `Tarea: ${descripcion} no encontrada`;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
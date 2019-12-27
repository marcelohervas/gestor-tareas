const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

};
const argv = require('yargs')
    .command('crear', 'Crea una tarea nuevo', {
        descripcion
    })
    .command('listar', 'Lista todas las tareas existentes', {})
    .command('actualizar', 'Actualiza una tarea como terminada', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
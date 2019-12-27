const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

switch (argv._[0]) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion.toUpperCase());
        console.log(`La tarea: ${tarea.descripcion} se ha creado`);
        break;
    case 'listar':
        let mensaje = porHacer.getListado();
        console.log(mensaje);
        break;
    case 'actualizar':
        let resultado = porHacer.actualizar(argv.descripcion.toUpperCase(), argv.completado);
        console.log(resultado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion.toUpperCase());
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
}
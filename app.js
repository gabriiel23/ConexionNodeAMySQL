// Importa el módulo de MySQL para interactuar con la base de datos
var mysql = require("mysql");

// Crea una conexión a la base de datos con los parámetros especificados
var conexion = mysql.createConnection({
    host: 'localhost',    // Dirección del servidor de la base de datos
    database: 'usuarios_db', // Nombre de la base de datos a la que se va a conectar
    user: 'root',         // Nombre de usuario de la base de datos
    password: ''          // Contraseña del usuario de la base de datos
});

// Conecta a la base de datos
conexion.connect(function(error){
    if (error) {
        // Si hay un error en la conexión, lanza una excepción
        throw error;
    } else {
        // Si la conexión es exitosa, imprime un mensaje en la consola
        console.log("Conexion exitosa");
    }
});

// Realiza una consulta para seleccionar todos los registros de la tabla 'estudiante'
conexion.query('SELECT * FROM estudiante', function(error, results, fields){
    if (error) {
        // Si hay un error en la consulta, lanza una excepción
        throw error;
    }

    // Recorre los resultados y los imprime en la consola
    results.forEach(result => {
        console.log(result);
    });
});

// Realiza una consulta para seleccionar todos los registros de la tabla 'docente'
conexion.query('SELECT * FROM docente', function(error, results, fields){
    if (error) {
        // Si hay un error en la consulta, lanza una excepción
        throw error;
    }

    // Recorre los resultados y los imprime en la consola
    results.forEach(result => {
        console.log(result);
    });
});

// Termina la conexión a la base de datos
conexion.end();



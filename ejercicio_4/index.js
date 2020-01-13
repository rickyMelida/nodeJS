//Llamamos al modulo http para crear servidores
const http = require('http');

const handleServer = function(req, res) {
    //Le damos mas informacion al servidor, es decir, el estado del servicio http
    //y el tipo de contenido de la pagina
    res.writeHead(200, { 'Content-type': 'text/html' }); 
    res.write('<h1>Hola mundo</h1>');

    //terminamos la respuesta
    res.end();
    //Luego que termine la respuesta va a seguir recibiendo peticiones del usuario
}

//creamos un servidor
//Como este tarda en crear un servidor, entonces va a hacer algo dentro de la funcion
//La funcion recibe un parametro que es la peticion del cliente, y otra que es la respuesta del seridor
//Luego que creamos un servidor, llamamos un metodo llamado listen, este metodo indica en que puerto va a escuchar mi servidor
const server = http.createServer(handleServer);

//Tambien podemos pasar el un callback como parametro del listen
server.listen(3000, function() {
    console.log('Servidor en el puerto 3000');
    
});


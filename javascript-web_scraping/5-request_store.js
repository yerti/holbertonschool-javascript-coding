#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Obtener la URL y la ruta del archivo
const url = process.argv[2];
const filePath = process.argv[3];

// Verifica que se proporcionaron la URL y la ruta del archivo
if (!url || !filePath) {
    console.error('Por favor, proporciona la URL y la ruta del archivo como argumentos.');
    process.exit(1);
}


request(url, (error, response, body) => {
    if (error) {
        console.error('Error al realizar la solicitud:', error);
        process.exit(1);
    }

    // Guarda el cuerpo de la respuesta en el archivo especificado
    fs.writeFileSync(filePath, body, 'utf-8');

    console.log(`Contenido de la URL guardado en ${filePath}`);
});

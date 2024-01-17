#!/usr/bin/env node 

const request = require('request');

const movieId = process.argv[2];


const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error al realizar la solicitud:', error);
        process.exit(1);
    }

    const movieData = JSON.parse(body);

    movieData.characters.forEach(characterUrl => {
        request(characterUrl, (error, response, characterBody) => {
            if (error) {
                console.error('Error al obtener información del personaje:', error);
            } else {
                const characterData = JSON.parse(characterBody);
                console.log(characterData.name);
            }
        });
    });
});

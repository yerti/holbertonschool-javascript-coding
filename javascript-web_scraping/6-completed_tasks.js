#!/usr/bin/node

const request = require('request');


const apiUrl = process.argv[2];


request(apiUrl, (error, response, body) => {

    // Parsea la respuesta del API a formato JSON
    const tasks = JSON.parse(body);

    // Filtra las tareas completadas por usuario
    const completedTasksByUser = tasks.reduce((result, task) => {
        if (task.completed) {
            result[task.userId] = (result[task.userId] || 0) + 1;
        }
        return result;
    }, {});

    console.log(completedTasksByUser);
});

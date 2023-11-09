"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    };
    const wolverine = {
        nombre: 'logan',
        edad: 60
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();

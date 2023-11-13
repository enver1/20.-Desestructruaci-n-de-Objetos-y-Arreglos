"use strict";
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const combre = () => {
        return 'Hola';
    };
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Fernando');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();

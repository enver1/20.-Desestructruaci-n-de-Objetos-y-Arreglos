(() => {
    interface Xmen {
        nombre: String;
        edad: number;
        poder?: string;
    }
    const enviarMision = ( xmen: Xmen) => {
        console.log( `Enviando a ${ xmen.nombre } a la mision` );
    }
    const regresarAlCuartel = ( xmen: Xmen) => {
        console.log( `Enviando a ${ xmen.nombre } a la mision` );
    }
    const wolverine: Xmen = {
        nombre: 'logan',
        edad: 60
    }
    enviarMision( wolverine );
    regresarAlCuartel( wolverine );
})();




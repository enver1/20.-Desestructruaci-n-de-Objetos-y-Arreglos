(() => {
    const sumar = ( a: number, b: number ): number => {
        return a + b ;
    }
    const combre = (): string => {
        return 'Hola';
    }
    const obtenerSalario = (): Promise<string> => {
        return new Promise( (resolve, reject) => {
            resolve( 'Fernando' );
        });
    }
    obtenerSalario().then( a => console.log( a.toUpperCase() ));
})();




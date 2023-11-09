(() => {
    const retirarDinero = ( montoRetirar: number): Promise<number> => {
        let dineroActual = 1000;
        return new Promise( ( resolve, reject ) => {
            if( montoRetirar > dineroActual ) {
                reject(' no hay suficientes fondos');
            } else {
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }
        });
    }
    retirarDinero( 500 )
    .then  ( montoActual => console.log(`me queda ${ montoActual }`))
    .catch ( err => console.warn( err ) );  // similar .catch ( console.warn );  
})();




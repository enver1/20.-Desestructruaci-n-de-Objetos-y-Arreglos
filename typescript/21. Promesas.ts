

(() => {

    
    console.log('inicio');
    const promesa  = new Promise( (resolve, reject ) => {
    
    // setTimeout( () => {
    // resolve('Se termino el timeout');
    
    // }, 1000);
    
    // });
    
    setTimeout( () => {
        reject('Se termino el timeout');
        
        }, 1000);
        
        });
    
    promesa
    .then( mensaje => console.log( mensaje ) )
    .catch( err => console.warn( err) );
    
    
    console.log('fin');
    })();
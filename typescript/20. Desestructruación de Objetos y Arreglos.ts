

(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan america',
        poder: 'Droga'
    }

  const extraer = ( { nombre, poder }: any ) => {        
        console.log( nombre );
        console.log( poder );
    }
    extraer( avenger );


    // //ejemplo 1
    // const extraer = ( avenger: any ) => {
    //     const {nombre, clave, poder } = avenger;
    //     console.log( nombre );
    //     console.log( poder );
    // }
    // extraer( avenger );

    // const {nombre, clave, poder } = avenger;

    // console.log( nombre );
    // console.log( clave);

    // console.log( avenger.nombre);
    // console.log( avenger.clave);
    // console.log( avenger.poder);

  // // ejercicio 2
    // const avengers: string [] = ['Thor', 'Iroman', 'Spiderman'];
    // console.log (avengers[0]); 

    // //desestructuracion ej 3
    // const avengers: string [] = ['Thor', 'Iroman', 'Spiderman'];
    // const [ loki, hombre, arana ] = avengers;
    // console.log ( loki );
    // console.log ( hombre );
    // console.log ( arana);

    //  //desestructuracion ej 4
    //  const avengers: string [] = ['Thor', 'Iroman', 'Spiderman'];
    //  const [  ,  , arana ] = avengers;
    //  console.log ( arana);
 
    //  // ej 5
    // const avengers: string [] = ['Thor', 'Iroman', 'Spiderman'];
    // const extraerArr = ( avengers: string[] ) => {  
    // console.log( avengers[0] );
    // console.log( avengers[1] );
    // console.log( avengers[2] );
    // }      
    // extraerArr( avengers ) ;

      // ej 6
      const avengers: string [] = ['Thor', 'Iroman', 'Spiderman'];
      const extraerArr = ( [thor3, iroman3, spiderman3 ]: string[] ) => {  
      console.log( thor3 );
      console.log( iroman3 );
      console.log( spiderman3 );
      }      
      extraerArr( avengers ) ;
  


})();




(() => {
//opercamelcase 1er mayuscula
//lowercamelcase 1er minuscula
// class Avenger {
//     nombre: string;
//     equipo: string;
//     nombreReal?: string;
//     puedePelear?: boolean;
//     peleasGanadas?: number;
//     constructor( nombre: string, equipo: string ){
//     this.nombre = nombre;
//     this.equipo = equipo;
//     }
//   }

class Avenger {
    constructor( public nombre: string ,
                 public equipo: string,
                 public nombreReal?: string,
                 public puedePelear?: true,
                 public peleasGanadas: number =  0 ){ }
  }
 const antman: Avenger = new Avenger('Atman','capi');
 console.log( antman)
})();




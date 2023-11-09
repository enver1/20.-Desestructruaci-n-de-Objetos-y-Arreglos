"use strict";
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
        constructor(nombre, equipo, nombreReal, puedePelear, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Atman', 'capi');
    console.log(antman);
})();


let nombreCarrera = prompt('Ingrese el nombre de la Carrera')
let cantidad_de_materias = prompt('Ingrese mediante un numero entero la cantidad de materias a ingresar');


let contador = 0;
let listaMaterias = [ ]



class Carrera {

    // Constructor
    constructor( nombre, materia ) {

        this._nombre = function () {
            return nombre;
        };

        this._materia = function () {
            return materia || [];
        };

    }

    // Metodos
    getName() {
        return this._nombre();
    }

    setName( nuevo_nombre ) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }

    agregarMateria( materia ) {
        this.materia.push(materia);
    }

    getMaterias() {

        this._materia().forEach(function ( elemento, index ) {
            console.log('--------------------------------------------')
            console.log(`Numero de Materia: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Edad: ${elemento._notaPromedio()}`);

        });

    }

    getNotaPromedioTotal(){

        let notas = 0
        let promedio = 0
        this._materia().forEach(function ( elemento, index) {
            notas = notas + elemento._notaPromedio()
        });
        promedio = notas/cantidad_de_materias
        
        return (promedio)
    }

    getMateriaNombre( busquedaDeNombre ) {

        this._materia().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log(`Numero de Materia: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Nota Promedio: ${elemento._notaPromedio()}`);
            

            }

        });

    }
}

class Materia {

    // Constructor del Objeto
    constructor( nombre, notaPromedio ) {

        this._nombre = function () {
            return nombre;
        };

        this._notaPromedio = function () {
            return notaPromedio;
        };

        

    }

    // Metodos asociados para obtener y modificar get y set
    getName() {
        return this._nombre();
    }
    getNotaPromedio() {
        return this._notaPromedio();
    }


    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setNotaPromedio(nueva_nota) {
        this._notaPromedio = function () {
            return nueva_nota;
        };

    }
}


while( contador < cantidad_de_materias ){

  
  let nombre = prompt('Ingrese el nombre de la materia')
  let nota = parseInt(prompt('Ingrese la nota promedio de la materia'))
  

  let materia = new Materia( nombre, nota )
  
  listaMaterias.push( materia )
  

  contador++

}




let carrera = new Carrera( nombreCarrera, listaMaterias );

alert( 'La nota promedio es:'+ ' '+ (carrera.getNotaPromedioTotal()));

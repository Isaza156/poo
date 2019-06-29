// construir el objeto, cuando se usa this, se accede a algun elemento del objeto ( todo dentro de la llave )
// 
// asi se hacia anteriormente y solo servia para 1.
/*


const peliculas = {
    nombre: "Harry",
    id: 01,
    reproducir(){
        return `Reproduciendo pelicula... ${this.nombre}`;
    }
}



// this.nombre es una variable y se define como propiedad
// una clase podria definirse como una plantilla de objetos, construimos objetos (constructor) (parecido a una funcion)
// debe instanciar un objeto (creacion), la palabra new hace referencia a la plantilla de objeto (clase)
// en los parentesis new Pelicula() pasamos los parametros del constrcutor, sino tiene se deja vacio
// hemos creado un objeto const PeliculaUno = new Pelicula(); a traves de una clase.
// un fundamento de POO es reutilizar o encapsular nuestro codigo en objetos que se van construyendo



class Pelicula {
    constructor(){
        this.nombre = "Harry";
        this.id = 1;
    }
}

const peliculaUno = new Pelicula();

console.log(peliculaUno); 



*/ 
// vamos a pasar parametros al constructor (this.nombre y this.id va a tener lo que le pasemos)
// luego al objeto le indicamos que le vamos a pasar al constructor: new Pelicula("Harry",1);
// con eso se crea objetos diferentes a traves de una misma plantilla (clase)
/*



class Pelicula {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }
}

const peliculaUno = new Pelicula("Harry",1);
const peliculaDos = new Pelicula("Araña",2);

console.log(peliculaUno);
console.log(peliculaDos);



*/
// en el primer objeto de ejemplo se habia creado una funcion o metodo : reproducir() 
// en el POO a las funciones se le llaman metodos 
// creamos un metodo que se llama reproducir y no se ejecuta hasta que lo llamemos
// recordar siempre la palabra this para acceder a los elementos del objeto
// se llama aqui console.log(peliculaUno.reproducir());
/*



class Pelicula {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){

        return `Reproduciendo pelicula ${this.nombre}`;
    }
}

const peliculaUno = new Pelicula("Harry",1);
const peliculaDos = new Pelicula("Araña",2);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());



*/
// RECORDAR: unicamente se puede crear un constructor dentro de una clase pero puedes crear infinitos metodos
// RECORDAR: siempre una clase comienza con la letra MAYUSCULA (buenas practicas)
// vamor a ver que es heredar, primero creamos una clase y le ponemos la palabra extends
// al hacer esto tenemos las mismas propiedades de Pelicula, es decir heredamos de otras clases.
// ahora, pelicula no puede acceder a Serie porque no lleva la palabra extends
/*



class Pelicula {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){

        return `Reproduciendo pelicula ${this.nombre}`;
    }
}

class Serie extends Pelicula{

    reproducirCapitulo(){

        return `Reproduciendo Capitulo... ${this.nombre}`;
    }


}

const peliculaUno = new Pelicula("Harry",1);
const peliculaDos = new Pelicula("Araña",2);
const serieUno = new Serie("Dexter",3);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo())



*/
// Vamos a crear un constructor en la clase Serie
// ponemos una palabra llamada super para indicar que vamos a usar unos parametros (propiedades) de Pelicula
// creamos a cap (this.cap = cap;) y le pasamos los parametros por medio de const serieUno = new Serie("Dexter",3,55);
// luego agregamos ${this.cap} : return `Reproduciendo Capitulo ${this.cap}...${this.nombre}`;
// se deberia mostrar la cantidad de capitulos (55)



class Pelicula {
    constructor(nombre, id){
        this.nombre = nombre;
        this.id = id;
    }

    reproducir(){

        return `Reproduciendo pelicula ${this.nombre}`;
    }
}

class Serie extends Pelicula{

constructor(nombre, id, cap) {

    super(nombre, id);
    this.cap = cap;
    
}
    reproducirCapitulo(){

        return `Reproduciendo Capitulo ${this.cap}...${this.nombre}`;
    }


}

const peliculaUno = new Pelicula("Harry",1);
const peliculaDos = new Pelicula("Araña",2);
const serieUno = new Serie("Dexter",3,55);

console.log(peliculaUno.reproducir());
console.log(peliculaDos.reproducir());
console.log(serieUno.reproducirCapitulo())
console.log("*********COMIENZO miJs2.js********")
console.log("*****Proxy*****")
const persona = {
    nomP: "",
    apellido:""
}
const handler = {
    set(obj, prop, valor) {
        //añado un if para comprobar que si no existe esa propiedad, hace un return por lo que no se guardan los datos.
        if(Object.keys(obj).indexOf(prop) === -1) {   //objengo las claves y busca si existe la propiedad que se va a modificar.
            return console.error(`La propiedad ${prop} no existe en el objeto persona`)
        }
        obj[prop] = valor;
    }
}

const silvi = new Proxy(persona, handler);
silvi.nomP = "silvita";
silvi.apellido = "san";
silvi.edad = 39;  //al añadir esta propiedad a silvi, también se añade a persona al estar vinculados. 
console.log(silvi);
console.log(persona);


console.log("********THIS********")

console.log(this)  //hace referencia a window

this.lugar = "Global"  //añade una propiedad lugar a window
function saludar(saludo, nombre){
    console.log(`${saludo} ${nombre} desde ${this.lugar}`)
}
const ob = {
    lugar: "Objeto"
}

saludar("Hola", "global")
saludar.call(ob, "Wellcome", "objeto1")
saludar.apply(ob, ["Adios", "objeto2"])


const personaThis = {
    nombre: "person",
    saludar: function(){
        console.log(`Hola ${this.nombre}`)
    }
}

personaThis.saludar()

const otraPersona = {
    saludar: personaThis.saludar.bind(personaThis)
}
//enlaza el contexto, creando una función que asigna el valor this al valor indicado entre ()
otraPersona.saludar()

console.log("*****This*****")
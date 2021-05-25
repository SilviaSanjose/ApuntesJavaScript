//CARGAR PÁGINA CON DEMORA
    //JQUERY
      /*  $(function(){
            $("body").hide().fadeIn(3000);    //llamada a Jquery para que tarde 3seg en cargar el body
        })  */
(function(){
    document.getElementById('body').style.opacity = 0
    setTimeout(()=>{
        document.getElementById('body').style.opacity = 1;
        document.getElementById('body').style.transition = 'opacity 2s ease-in-out';
    }, 300);
})();
    
//******* */

var camisetas, pantalones, total;
camisetas = "5";
pantalones = 5;

total = Number(camisetas)+ pantalones;   //Number transforma un string a numero

var articulos = [56, 89, 20, 58];
articulos.pop(); // elimina el último, 58


function prueba(){
    var lista = {"contacto": "Silvia", "resumen": "blablablab lablaa"}
    console.log(lista)
}

//ejemplo datos de un array
var silvia = {
    nombre: "silvia", 
    colores: ["rojo", "verde"],
    letras:  {primera: "A", segunda:"B"},
    saludar: function () { console.log(`Hola ${this.nombre}`)  }
    }

silvia.nombre
silvia.colores[1]
silvia.letras.primera
silvia.saludar()

//operador ternario
var nom = "Silvia";
var teLLamas = (nom === "Silvia") ? `Te llamas ${nom}` : "Quién eres?"
console.log("Operador ternarios ", teLLamas)


//Bucles
console.log("*******Tipos bucle for******")
var numeros = [10,20,30,40]
var obj = {nombre: "me", apellido: "boo"}
for(var i in numeros){      //for in debe llevar el nº del elemento. Se usa más para objetos
    console.log(numeros[i])
}
for( var index in obj){
    console.log(obj.nombre)   //imprime solo el valor de esa clave
    console.log(`mi valor: ${obj[index]}`)   //imprime los valores por cada elemento
    console.log(`mi clave: ${index}`)   //imprimre las claves
}
for(var i of numeros){    //for of muestra directamente el elemento. Para arrays
    console.log(i)
}

//Parametros rest
console.log("*****Parámetros rest*****")
function sumar (a, b, ...masArgumentos) {  
    let res = a+b;
    console.log(`argumento a: ${a} / argumento b: ${b}`)
    console.log(`argumentos rest: ${masArgumentos}`)
 }
sumar(2,3, 4, 1)

function sumaArrow ( a, b, ...c){
    let res2 = a +b;
    c.forEach((n) =>{console.log(res2 += n)
    })
}
sumaArrow(1,2,6)

//ejemplo importaciones
console.log("*****Export/Import***")
import pordefecto, { usuario, suma20} from "./export.js";
import {sumaFuncion, objetoExportado} from "./export.js";

console.log("importando mi nombre: ", usuario)

let numero = 7; 
let resImport = suma20 + numero   //suma20 importado
console.log("Suma con importanción: ", resImport)

sumaFuncion(suma20, numero)

objetoExportado.saludar(usuario)
console.log(objetoExportado.despedir)

pordefecto();

//Symbol

(() =>{
    console.log("***Symbol***")
    let id1 = "hola"
    let id2 = "hola"
    console.log(id1 == id2)  //true
    let id3 = Symbol("hola");
    let id4 = Symbol("hola");
    console.log(id3 == id4) //false

    const NOMBRE = Symbol(); 
    const persona = {  //creo objeto con Symbol
        [NOMBRE]: "Silvi"
    };
    console.log(persona)  //>>  Symbol(): "Silvi"

    persona.NOMBRE = "Silvi2"  //añado al objeto
    console.log(persona)   //>> NOMBRA: "SIlvi2", Symbol(): "Silvi"
    console.log(persona.NOMBRE)    //>> Silvi2
    console.log(persona[NOMBRE])  //>> Silvi

    const SALUDO = Symbol();  //creo nuevo Symbol
    persona[SALUDO] = () => { console.log("Hola Symbol")}  //añado función Symbol al objeto
    persona[SALUDO]();
    

})();


//Callbacks
console.log("******Callbacks******")

function cuadradoCallback(value, callback){   //función recibe como parámetros un valor y una función llamada callback
    setTimeout(() =>{
        callback(value, value*value);       
    },0 | Math.random()*100);
}
//dentro de la función cuadradoCallback, se llama de nuevo a la función callback pasada como parámetro, que como esta definida abajo, recibe dos parámetros
//valor y result que aqui corresponden con value y value*value

//Llamada a la función: se pasa el valor,y una función anónima con dos parámetros(valor y result) que luego imprimirá
cuadradoCallback(2,(valor, result)=>{    
    console.log("Inicia Callback");
    console.log(`Callback: ${valor}, ${result}`);
    cuadradoCallback(3,(valor, result)=>{        //se vuelve a llamar a la función... que no se ejecuta hasta que no termine la anterior, se puede producir Callback Hell*
        console.log(`Callback: ${valor}, ${result}`)
    })
})

//*Callback Hell son multiples llamadas una dentro de otra, que es mejor evitar ya que el código puede ser muy confuso. Para ello promesas entre otras cosas. 


//PROMESAS

function cuadradoPromesas(value){
    if (typeof value !== 'number') return Promise.reject(`Error!! ${value} no es un número`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({  //creamos objeto con value y result como claves
            value, 
            result: value * value
        }); 
    }, 1000 | Math.random() *100);
});  
} 

cuadradoPromesas(0)
    .then((obj)=>{   //recibe el resolve, en este caso nuestro objeto
        console.log("***Inicio Promise****")
        console.log(obj)
        console.log(`Recibo el valor ${obj.value} y mi resultado ${obj.result}`);
        return cuadradoPromesas(1);  //devuelve una llamada a la función con parámetro 1
    })
    .then(obj => {
        console.log(`Promesa con 1, valor ${obj.value} y resultado ${obj.result}`);
        return cuadradoPromesas(2)
    })
    .then(obj => {
        console.log(`Promesa con 2, valor ${obj.value} y resultado ${obj.result}`);
        return console.log("**Fin promesa***")
    })
    .catch(err => console.error(err));


///ASYNC/AWAIT

async function asincrona(){
        try {
            console.log("****Incio async function****");
            let obj= await cuadradoPromesas(0);
            console.log(`Async Function 0: ${obj.value},  ${obj.result}`);
            obj= await cuadradoPromesas(1);
            console.log(`Async Function 1: ${obj.value},  ${obj.result}`);
            obj= await cuadradoPromesas(2);
            console.log(`Async Function 2: ${obj.value},  ${obj.result}`);
        } catch (error) { 
            console.error(error);
         } 
}

// En caso de función anónima:
const asincrona2 = async () =>{
    try {
        console.log("****Incio async function****");
        let obj= await cuadradoPromesas(3);
        console.log(`Async Function 3: ${obj.value},  ${obj.result}`);

    } catch (error) { 
        console.error(error);
     } 
} 

(function(){    //añado setTimeout en vez de llamada directamente a asincrona() para que se muestre después de las promesas en consola
    setTimeout(()=>{
        asincrona()
    }, 4000);
    setTimeout(()=>{
        asincrona2()
    }, 8000);
})();



export const usuario = "Silvia"

var noexportada ="Esta variable no la voy a exportar"

export var suma20 = 20;

export function sumaFuncion(a,b){
    console.log("Función suma Importada; ", a+b)
}

function saludar(s){
    console.log("Saludo importado: Hola " , s)
}

export const objetoExportado = {
    saludar,
    despedir: "Hasta luego"
}

export default function pordefecto(){
    console.log("Ejecutando función por defecto")
}

let variable = 123;
//export default variable;
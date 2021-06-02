console.log("*********COMIENZO miJs2.js********")

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

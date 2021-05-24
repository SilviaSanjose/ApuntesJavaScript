//AJAX CON HTTPRESPONSE
(() => {  //funcion anonima autoejecutable
    const xhr = new XMLHttpRequest(),  // creo objeto httpRequest
    $xhr = document.getElementById("xhr"), // creo variable del elemento del Html donde incluire la informacion
    $fragmento = document.createDocumentFragment(); //creamos un objeto para rellenar con la información y pasarla luego al html
    //esto es para mejorar el rendimiento y no hacer muchas llamadas por cada linea de resultado.

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");   //llamada a la APi fake
    xhr.send();  //se envía la información a mi variable xhr

    xhr.addEventListener("readystatechange", e => {   //se pone a la escucha del estado de la llamada a la Api
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status <300) {
            let respon =xhr.responseText;  //responseText devuelve en texto la información de la llamada a la Api
            let json = JSON.parse(respon);   //se parsea a formato Json

            json.forEach((i) =>{
                const $li = document.createElement("li");   //creo elemento <li> 
                $li.innerHTML =`${i.name} -- ${i.email} -- ${i.phone}`;  // en cada elemento li creado meto la información del json
                $fragmento.appendChild($li);    //cada elemento li con la información, la añado al fragmento
                
            });
            
        $xhr.appendChild($fragmento);  //añado al campo del html el fragmento
        } else {
            let message = xhr.statusText || "Ocurrió un error"  //variable sera el texto delestado y si no hay mi texto
            $xhr.innerHTML = "Error: " + message
        } 
    });
})();

//AJAX CON API FETCH
(() => {
    const $fetch = document.getElementById("fetch"), 
    $fragmento = document.createDocumentFragment();

    // en fetch, then sería como el try-si se cumple, catch el except- si no se cumple, y el finally
    fetch("https://jsonplaceholder.typicode.com/users")
        //then da un resultado de tipo respuesta, que hay que convertirlo a un formato valido
        .then((res) => {     
            return res.ok ? res.json():Promise.reject(res); 
        /*podria reducirse .then((res)=> (res.ok ? res.json():Promise.reject(res)))  */

        //convierto a json con res.json(). Compruebo que la petición sea correcta: fetch tiene un parametro que es ok= true/false
        //si res.ok  (si es true)  devuelves ?  el json. Si no : rechazas   
        //Esto es para validar el error y salte el catch
               
        })
        .then((json) => {       //un segundo then, recoge la respuesta del primero
            //$fetch.innerHTML = json;
            json.forEach((i) =>{
                const $li = document.createElement("li");   //creo elemento <li> 
                $li.innerHTML =`${i.name} -- ${i.email} -- ${i.phone}`;  // en cada elemento li creado meto la información del json
                $fragmento.appendChild($li);    //cada elemento li con la información, la añado al fragmento
                
            });
            $fetch.appendChild($fragmento);  //añado al campo del html el fragmento
        })
        .catch(err => {
            let message = err.statusText || "Ocurrió un error"  //variable sera el texto delestado y si no hay mi texto
            $fetch.innerHTML = "Error: " + message
        })
        .finally(() => {
            console.log("Esto se ejecuta siempre (ajax fetch)");
        } );
})();

//AJAX CON API FETCH + ASYNC-AWAIT
(() => {
    const $fetchAsync = document.getElementById("fetch-async"), 
    $fragmento = document.createDocumentFragment();

    async function getData() {
        try {
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
            json = await respuesta.json();

            //si la respuesta es false, recogo los valores como diccionario del estado y texto de estado, y eso viaja al catch
            if(!respuesta.ok) throw {status: respuesta.status, statusText: respuesta.statusText};
            
            json.forEach((i) =>{
                const $li = document.createElement("li");   //creo elemento <li> 
                $li.innerHTML =`${i.name} -- ${i.email} -- ${i.phone}`;  // en cada elemento li creado meto la información del json
                $fragmento.appendChild($li);    //cada elemento li con la información, la añado al fragmento
                
            });
            $fetchAsync.appendChild($fragmento);  //añado al campo del html el fragmento
            
        } catch (error) {
            let message = error.statusText || "Ocurrió un error"  //variable sera el texto delestado y si no hay mi texto
            $fetchAsync.innerHTML = `Error: ${error.status} ${message}`;
        }finally {
            console.log("Esto se ejecuta siempre (ajax fetch-async)");
        }
    }
    getData();
})();
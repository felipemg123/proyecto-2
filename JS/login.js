document.addEventListener("DOMContentLoaded", () => {

    let user = "";
    user = "felipe murguia";


    if (true) {
        let user = "feli";
        console.log(user);

    }

    console.log(user);

    
    console.log(`
        ${user}

    `);

    
    const usuario = {

        "nombre": "felipe",
        "apellido": "murguia",
        "edad": "27",
        "calcularFechaNacimiento": () => {
            this.edad
        }
    }

    usuario.nombre

    user = JSON.parse(`
        {
            "nombre": "felipe",
            "apellido": "murguia",
            "edad":27
        }
    `)

    user ["nombre"] = "felipe"

    console.log(user["felipe"]);

    user.nombre = "felipe";

    let array = [1,2,3,4,5]

    for (let key in user) {
        console.log(key)
    }   

    for   (let i in array) {
        console.log (i);
    }


});
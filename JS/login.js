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

    let user = JSON.parse(`
    {
        
        "nombre": "felipe",
        "apellido": "murguia",
        "edad": "27",
    }
    `);

    console.log(user.nombre);



});
class tareas {
    usuarios = [];
    materias = [];
    titulo = [];
    instrucciones = [];
    fechaEntrega = new Date ();
    fechacreacion = new Date ();
    horaEntrega = new Date().getHours();
    puntos = 0;

    constructor(
        usuarios,
        materias,
        titulo,
        instrucciones,
        fechaEntrega,
        fechacreacion,
        horaEntrega,
        puntos,
    ) {
        this.usuarios = usuarios;
        this.materias = materias;
        this.titulo = titulos;
        this.instrucciones = instrucciones;
        this.fechaEntrega = fechaEntrega;
        this.fechacreacion = fechacreacion;
        this.horaEntrega = horaEntrega;
        this.puntos = puntos;

    }


}

const nuevaTarea = new tareas ([],[],"Git y Github","Elaborar un nuevo repositorio",new Date('2023-01-29'), '12', 1);
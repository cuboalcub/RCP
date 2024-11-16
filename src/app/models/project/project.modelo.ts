export class Project {
    id: number = 0;
    nombre: string = "";
    optimo: number = 0;
    probable: number  = 0;
    pesimo: number = 0;

    constructor(id: number, nombre: string, optimo: number, probable: number, pesimo: number) {
        this.id = id;
        this.nombre = nombre;
        this.optimo = optimo;
        this.probable = probable;
        this.pesimo = pesimo;
    }
}
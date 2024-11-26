export interface Actividad {
    o: number ; // Tiempo de la actividad
    mp: number; // Tiempo de media de la actividad
    p: number; // Tiempo de la actividad
    pert: number; // Tiempo estimado de la actividad
    precedentes: string[]; // Lista de actividades precedentes
}   

// Modelo principal que contiene el nombre del proyecto y las actividades
export interface Proyecto {
    nombre: string; // Nombre del proyecto
    actividades: Record<string , Actividad> 
}

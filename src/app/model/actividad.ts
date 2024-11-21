interface Actividad {
    pert: number; // Tiempo estimado de la actividad
    precedentes: string[]; // Lista de actividades precedentes
}

// Modelo principal que contiene el nombre del proyecto y las actividades
interface Proyecto {
    nombre: string; // Nombre del proyecto
    actividades: Record<string, Actividad>; // Un mapa de actividades por su clave única
}

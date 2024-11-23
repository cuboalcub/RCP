import { Injectable } from '@angular/core';

interface Nodo {
  id: number;
  nombre: string;
  duracion: number;
  predecesores: number[];
  sucesores: number[];
  inicioTemprano: number;
  finTemprano: number;
  inicioTardio: number;
  finTardio: number;
  esCritico: boolean;
}

@Injectable({ providedIn: 'root' })
export class RutaCriticaService {
  calcularRutaCritica(nodos: Nodo[]): Nodo[] {
    // Implementación del algoritmo de cálculo de la ruta crítica
    // ...

    // Ejemplo básico:
    nodos.forEach(nodo => {
      // Cálculo del inicio temprano y fin temprano
      // ...

      // Cálculo del inicio tardío y fin tardío
      // ...

      // Marcar como crítico si finTemprano === finTardio
      nodo.esCritico = nodo.finTemprano === nodo.finTardio;
    });

    return nodos;
  }
}
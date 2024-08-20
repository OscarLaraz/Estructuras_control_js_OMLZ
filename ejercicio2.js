function PromedioFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    // Pesos de cada componente
    const VALOR_EXAMEN = 0.20;
    const Valor_Tareas = 0.40;
    const VALOR_ASISTENCIA = 0.10;
    const VALOR_INVESTIGACION = 0.30;

    // Cálculo de la nota final
    const notaFinal = (examen * VALOR_EXAMEN) +
                      (tareas * Valor_Tareas) +
                      (asistencia * VALOR_ASISTENCIA) +
                      (investigacion * VALOR_INVESTIGACION);

    // Mostrar los datos del alumno y la nota final
    console.log(`Nombre: ${nombre}`);
    console.log(`Carnet: ${carnet}`);
    console.log(`Nota Final: ${notaFinal.toFixed(2)}`);
}

// Ejemplo de uso
PromedioFinal("Oscar Lara", "k00002505", 85, 90, 95, 88);

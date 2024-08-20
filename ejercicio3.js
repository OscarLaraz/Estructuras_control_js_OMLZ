function AumentoTrabajador(nombre, salario, categoria) {
    let porcAumento = 0;
    switch (categoria) {
        case "A":
            porcAumento = 0.15;
            break;
        case "B":       
            porcAumento = 0.30;
            break;
        case "C":
            porcAumento = 0.10;
            break;
        case "D":
            porcAumento = 0.20;
            break;
        default:
            return "Categoría no válida";
    }

    const aumento = salario * porcAumento;
    const nuevoSalario = salario + aumento;

    return `
    Datos del empleado:
    Nombre: ${nombre}
    Categoría: ${categoria}
    Salario actual: $${salario.toFixed(2)}
    Aumento: $${aumento.toFixed(2)}
    Nuevo salario: $${nuevoSalario.toFixed(2)}
    `;
}

// Ejemplo de uso

const nombre = "Alejandro Fuentes";
const salario = 1000;
const categoria = "B";

console.log(AumentoTrabajador(nombre, salario, categoria));
const readline = require('readline');

// Inicialización de variables
let negativos = 0;
let positivos = 0;
let multiplos15 = 0;
let sumaPares = 0;
let valoresIngresados = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerInput(mensaje) {
    return new Promise((resolve) => {
        rl.question(mensaje, (input) => {
            const valor = Number(input);
            if (isNaN(valor) || !Number.isInteger(valor)) {
                console.log("Por favor, ingrese un número entero válido.");
                resolve(obtenerInput(mensaje));
            } else {
                resolve(valor);
            }
        });
    });
}

async function main() {
    while (valoresIngresados < 10) {
        const valor = await obtenerInput(`Ingrese el valor #${valoresIngresados + 1}: `);
        valoresIngresados++;

        // Contar valores negativos
        if (valor < 0) {
            negativos++;
        }

        // Contar valores positivos
        if (valor > 0) {
            positivos++;
        }

        // Contar múltiplos de 15 (excluyendo 0)
        if (valor % 15 === 0 && valor !== 0) {
            multiplos15++;
        }

        // Sumar los números pares
        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }

    // Mostrar resultados
    console.log(`Cantidad de valores negativos: ${negativos}`);
    console.log(`Cantidad de valores positivos: ${positivos}`);
    console.log(`Cantidad de múltiplos de 15: ${multiplos15}`);
    console.log(`Suma de los números pares: ${sumaPares}`);

    rl.close();
}

main();

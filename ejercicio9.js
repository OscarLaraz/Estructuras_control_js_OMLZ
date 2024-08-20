const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerTemperatura(mensaje) {
    return new Promise((resolve) => {
        rl.question(mensaje, (input) => {
            const temperaturaCelsius = Number(input);
            if (isNaN(temperaturaCelsius)) {
                console.log("Por favor, ingrese un número válido.");
                resolve(obtenerTemperatura(mensaje));
            } else {
                resolve(temperaturaCelsius);
            }
        });
    });
}

function clasificarTemperatura(temperaturaFahrenheit) {
    if (temperaturaFahrenheit >= 14 && temperaturaFahrenheit <= 32) {
        return "Temperatura baja";
    } else if (temperaturaFahrenheit > 32 && temperaturaFahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if (temperaturaFahrenheit > 68 && temperaturaFahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

async function convertirYClasificar() {
    const temperaturaCelsius = await obtenerTemperatura("Ingrese la temperatura en Celsius: ");
    const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    
    console.log(`Temperatura en Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
    console.log(clasificarTemperatura(temperaturaFahrenheit));

    rl.close();
}

convertirYClasificar();


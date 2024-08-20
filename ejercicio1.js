const esMayorDeEdad = (edad) => {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
}

// Ejemplo de uso:
const edadUsuario = 20;
console.log(esMayorDeEdad(edadUsuario));
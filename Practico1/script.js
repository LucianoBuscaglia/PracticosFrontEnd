// Cuando se hace clic en el botón "Calcular"
document.getElementById("calcular").addEventListener("click", function() {
    // Se obtienen los valores ingresados por el usuario
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operador").value;

    // Se verifica si los valores ingresados son válidos
    if (!isValidNumber(num1) || !isValidNumber(num2)) {
        alert("Por favor, ingresa valores numéricos válidos en los campos.");
        return;
    }
    
    // Se define la variable donde se almacena el resultado de la operación
    let resul;

    // Se realiza el cálculo según el operador seleccionado (suma, resta, multiplicación, división)
    switch (operator) {
        case "suma":
            resul = num1 + num2;
            break;
        case "resta":
            resul = num1 - num2;
            break;
        case "multiplicacion":
            resul = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resul = num1 / num2;
            if (!isFinite(resul)) {
                alert("El resultado es demasiado grande o pequeño para ser mostrado.");
                return;
            }
            break;
        default:
            resul = "Error";
    }

    // Se muestra el resultado de la operación en el campo correspondiente
    document.getElementById("resul").value = resul;
});

// Es una función donde se verifica si un número es válido
function isValidNumber(number) {
    return !isNaN(number) && number !== "";
}

// Cuando se hace clic en el botón "Borrar"
document.getElementById("borrar").addEventListener("click", function() {
    //  Se restablecen los campos y valores iniciales o predeterminados
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operador").value = "suma";
    document.getElementById("resul").value = "";
});







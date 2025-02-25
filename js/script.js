document.getElementById("miBoton").addEventListener("click", () => {
    alert("¡Hola desde JavaScript!");
});


document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("emailInput");
    const subscribeBtn = document.getElementById("subscribeBtn");

    subscribeBtn.addEventListener("click", function () {
        const email = emailInput.value.trim();

        if (email === "") {
            alert("Por favor, ingresa un correo electrónico válido.");
        } else {
            alert(`¡Gracias por suscribirte con el correo: ${email}!`);
            emailInput.value = ""; // Limpiar el campo después de suscribirse
        }
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí puedes agregar la lógica para enviar los datos del formulario a un servidor

    // Mostrar mensaje de éxito
    document.getElementById('responseMessage').textContent = "Gracias por contactarnos, " + name + ". Te responderemos pronto.";
    
    // Limpia el formulario
    document.getElementById('contactForm').reset();
});
document.getElementById('energyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const consumption = parseFloat(document.getElementById('consumption').value);
    let estimatedRate = 0;
    let tips = [];

    // Cálculo simple de tarifa (modificar según tarifas reales)
    if (consumption <= 100) {
        estimatedRate = consumption * 0.5; // Ejemplo: S/.0.5 por kWh
        tips.push("Apaga las luces cuando no las necesites.");
        tips.push("Usa bombillas de bajo consumo.");
    } else if (consumption <= 300) {
        estimatedRate = consumption * 0.4;
        tips.push("Considera utilizar electrodomésticos de bajo consumo.");
        tips.push("Optimiza el uso de aire acondicionado.");
    } else {
        estimatedRate = consumption * 0.3;
        tips.push("Revisa el aislamiento de tu hogar.");
        tips.push("Instala paneles solares si es posible.");
    }

    document.getElementById('estimatedRate').textContent = `S/. ${estimatedRate.toFixed(2)}`;
    const tipsList = document.getElementById('tips');
    tipsList.innerHTML = "";
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    document.getElementById('results').classList.remove('hidden');
});

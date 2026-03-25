const canvas = document.getElementById('myChart');

const grafico = new Chart(canvas, {
    type: 'bar',
    data: {
        labels: ['Rojo', 'Azul', 'Verde'],
        datasets: [{
            label: 'Ejemplo',
            data: [12, 19, 3]
        }]
    }
});

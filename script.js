// Selecciona todos los enlaces del navbar y agrega un efecto de scroll suave
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Generar un gráfico con Plotly
document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {
            x: ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01'],
            y: [29000, 33000, 45000, 60000],
            type: 'scatter',
            mode: 'lines+markers',
            line: { color: '#f7931a' }
        }
    ];

    const layout = {
        title: 'Precio de Bitcoin en 2021',
        xaxis: { title: 'Fecha' },
        yaxis: { title: 'Precio en USD' }
    };

    Plotly.newPlot('chart1', data, layout);
});

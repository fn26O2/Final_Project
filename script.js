// Datos de ejemplo
var fechas = ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01'];
var precios = [29000, 33000, 45000, 60000];

// Gráfico de líneas
var dataLine = [{
    x: fechas,
    y: precios,
    type: 'scatter'
}];

Plotly.newPlot('bitcoin-chart', dataLine);

// Gráfico de barras
var dataBar = [{
    x: fechas,
    y: precios,
    type: 'bar'
}];

Plotly.newPlot('bitcoin-bar-chart', dataBar);

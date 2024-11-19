document.addEventListener('DOMContentLoaded', function() {
    var data = [{
        x: ['2021-01-01', '2021-02-01', '2021-03-01', '2021-04-01'],
        y: [29000, 33000, 45000, 60000],
        type: 'scatter'
    }];
    
    var layout = {
        title: 'Precio de Bitcoin en 2021',
        xaxis: {
            title: 'Fecha'
        },
        yaxis: {
            title: 'Precio en USD'
        }
    };
    
    Plotly.newPlot('chart1', data, layout);
});

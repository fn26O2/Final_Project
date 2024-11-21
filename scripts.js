// Gráfico de precios de Bitcoin
const ctx1 = document.getElementById('price-chart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2023-01-01', '2023-06-01', '2023-12-01', '2024-04-01'],
        datasets: [{
            label: 'Bitcoin Price',
            data: [16500, 30000, 42000, 48000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Gráfico de capitalización de mercado
const ctx2 = document.getElementById('market-cap-chart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['2023-01-01', '2023-06-01', '2023-12-01', '2024-04-01'],
        datasets: [{
            label: 'Market Cap',
            data: [500000000, 700000000, 950000000, 1200000000],
            backgroundColor: 'rgba(255, 215, 0, 0.6)',
            borderColor: 'rgba(255, 215, 0, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de comparación Bitcoin vs Oro
const ctx3 = document.getElementById('price-gold-chart').getContext('2d');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['2023-01-01', '2023-06-01', '2023-12-01', '2024-04-01'],
        datasets: [{
            label: 'Bitcoin Price',
            data: [16500, 30000, 42000, 48000],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            tension: 0.4
        }, {
            label: 'Gold Price',
            data: [1800, 1900, 2000, 2100],
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});


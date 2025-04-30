const ctx = document.getElementById('salesChart').getContext('2d');
        const salesChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['07 Oct', '08 Oct', '13 Oct', '14 Oct', '19 Oct', '23 Oct'],
                datasets: [{
                    label: 'Sales ($)',
                    data: [500, 700, 3200, 500, 500, 2500],
                    borderColor: 'rgba(147, 112, 219, 1)', // Purple color matching the image
                    backgroundColor: 'rgba(147, 112, 219, 0.2)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: 'rgba(147, 112, 219, 1)'
                }]
            },
            options: {
                scales: {
                    y: {
                        // beginAtZero: true,
                        max: 3500,
                        ticks: {
                            stepSize: 500,
                            callback: function(value) {
                                return '$' + value;
                            }
                        },
                        title: {
                            display: true,
                            text: 'Sales'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Date'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
// Exemplo de dados para o gráfico de barras
let chartData = [
    { label: "Janeiro", y: 12000 },
    { label: "Fevereiro", y: 15000 },
    { label: "Março", y: 18000 },
    { label: "Abril", y: 10000 },
    { label: "Maio", y: 20000 },
    { label: "Junho", y: 25000 },
];

// Configuração do gráfico de barras
let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
        text: "Consumo de Água Mensal"
    },
    axisY: {
        title: "Litros"
    },
    data: [{
        type: "column",
        dataPoints: chartData
    }]
});

// Renderiza o gráfico
chart.render();
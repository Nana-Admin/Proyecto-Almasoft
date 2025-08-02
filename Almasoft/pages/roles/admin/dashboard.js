document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('servicesChart').getContext('2d');

  const servicesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
      datasets: [
        {
          label: 'Sepelios',
          data: [3, 2, 1, 4, 2, 1, 3],
          backgroundColor: '#6a1b9a'
        },
        {
          label: 'Velaciones',
          data: [2, 1, 3, 1, 2, 3, 2],
          backgroundColor: '#ab47bc'
        },
        {
          label: 'Misas',
          data: [1, 0, 2, 1, 1, 0, 2],
          backgroundColor: '#ce93d8'
        },
        {
          label: 'Exhumación',
          data: [2, 1, 5, 2, 1, 4, ],
          backgroundColor: '#54155fff'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'Servicios de la semana',
          font: {
            size: 18
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
});
const ctx = document.getElementById('graficoServicios').getContext('2d');
const graficoServicios = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Sepelios', 'Velaciones', 'Misas', 'Exhumaciones'],
    datasets: [
      {
        label: 'Semana Actual',
        data: [12, 9, 7, 3],
        backgroundColor: '#b700ffff'
      },
      {
        label: 'Semana Anterior',
        data: [8, 11, 5, 2],
        backgroundColor: '#5900ffff'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
});
const ctxComparativa = document.getElementById('graficaComparativa').getContext('2d');

new Chart(ctxComparativa, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: '2024',
        data: [40, 55, 60, 45, 70],
        backgroundColor: '#d846e5ff',
      },
      {
        label: '2025',
        data: [65, 50, 80, 60, 95],
        backgroundColor: '#b700ffff',
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20
        }
      }
    }
  }
});
const mensajesIA = [
  "Este mes se proyectan 12 sepelios. Revisa la disponibilidad de asesores.",
  "¡Buen trabajo! Los servicios han aumentado un 15% respecto al mes anterior.",
  "Has recibido 8 nuevos clientes esta semana.",
  "Las compras en línea aumentaron este trimestre. Considera reforzar el e-commerce.",
  "Alerta: 3 días con baja asignación de asesores. Verifica cronograma.",
  "Tendencia positiva: Las misas programadas superan el promedio mensual.",
];

function mostrarMensajeInteligente() {
  const mensaje = mensajesIA[Math.floor(Math.random() * mensajesIA.length)];
  document.getElementById("mensajeIA").textContent = mensaje;
}

// Mostrar al cargar
mostrarMensajeInteligente();
setInterval(mostrarMensajeInteligente, 15000); // cada 15 segundos




// Arreglo de mensajes de alerta
const alertMessages = [
  "Primer mensaje de alerta",
  "Segundo mensaje de alerta",
  "Tercer mensaje de alerta",
];

// Función para mostrar una alerta
function showAlert(message) {
  const alert = document.querySelector('.alert');
  const alertMsg = alert.querySelector('.msg');
  alertMsg.textContent = message;

  $('.alert').addClass("show");
  $('.alert').removeClass("hide");
  $('.alert').addClass("showAlert");

  setTimeout(function () {
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
    showLimitedAlerts(); // Mostrar la siguiente alerta después de que esta se oculte
  }, 5000);
}

// Función para mostrar el primer mensaje después de 5 segundos
setTimeout(function() {
  showAlert(alertMessages[0]);
}, 5000);

// Función para mostrar alertas limitadas
function showLimitedAlerts() {
  // Obtener la fecha y hora actual
  const now = new Date();
  // Obtener la hora actual en minutos
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Verificar si ya se mostraron todas las alertas
  if (localStorage.getItem('alertCounter') >= alertMessages.length) {
    return;
  }

  // Verificar si ha pasado al menos 15 minutos desde la última alerta
  const lastAlertTime = localStorage.getItem('lastAlertTime');
  if (lastAlertTime) {
    const minutesSinceLastAlert = currentMinutes - parseInt(lastAlertTime);
    if (minutesSinceLastAlert < 15) {
      return;
    }
  }

  // Mostrar la siguiente alerta
  const alertCounter = localStorage.getItem('alertCounter') || 0;
  showAlert(alertMessages[alertCounter]);

  // Actualizar el contador de alertas y la hora de la última alerta
  localStorage.setItem('alertCounter', parseInt(alertCounter) + 1);
  localStorage.setItem('lastAlertTime', currentMinutes);
}

// Llamar a la función para mostrar alertas limitadas
showLimitedAlerts();

document.addEventListener("DOMContentLoaded", () => {
  // --- Animación de la Línea de Tiempo en seguir-pedido.html ---
  const timelineSteps = document.querySelectorAll(".linea-tiempo div");
  if (timelineSteps.length > 0) {
    let currentStep = 0;

    const updateTimeline = () => {
      if (currentStep < timelineSteps.length) {
        timelineSteps.forEach(step => step.classList.remove("active"));
        timelineSteps[currentStep].classList.add("active");
        currentStep++;
      }
    };

    // Inicia en "Pendiente"
    updateTimeline();
    // Cambia cada 3 segundos
    setInterval(updateTimeline, 3000);
  }

  // --- Mostrar Mensaje de Notificaciones Activas ---
  const activateNotificationsButton = document.querySelector("#notificacion-activa");
  if (activateNotificationsButton) {
    activateNotificationsButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevenir la navegación predeterminada
      // Crear el mensaje
      const notificationMessage = document.createElement("div");
      notificationMessage.classList.add("mensaje-notificacion");
      notificationMessage.textContent = "Notificaciones Activas";
      document.body.appendChild(notificationMessage);

      // Mostrar y ocultar el mensaje
      setTimeout(() => {
        notificationMessage.classList.add("show");
      }, 100);
      setTimeout(() => {
        notificationMessage.classList.remove("show");
        setTimeout(() => {
          notificationMessage.remove();
        }, 500);
      }, 3000); // Desaparece después de 3 segundos
    });
  }
});
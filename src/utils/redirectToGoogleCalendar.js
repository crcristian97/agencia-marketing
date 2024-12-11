export const redirectToGoogleCalendar = () => {
  // Definir los detalles del evento
  const eventDetails = {
    title: "Reunión de trabajo",
    details: "Discutir el proyecto de desarrollo",
    location: "Sala de reuniones",
    startDate: "20241205T100000Z", // Fecha y hora de inicio (en formato UTC)
    endDate: "20241205T110000Z",   // Fecha y hora de fin (en formato UTC)
  };

  // Construir la URL para Google Calendar con todos los parámetros
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&dates=${eventDetails.startDate}/${eventDetails.endDate}`;

  // Abrir el calendario con los datos preconfigurados
  window.open(calendarUrl, "_blank");
};

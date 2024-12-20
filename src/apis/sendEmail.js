import emailjs from '@emailjs/browser';
import MessageAlert from '../components/MessageAlert';

export const handleSubmitEmail = async (form) => {
  try {
    await emailjs.sendForm('service_osh37vi', 'template_4sbpza5', form, {
      publicKey: '84Q-PtW2JuzkgsgoI',
    });
  } catch (err) {
    MessageAlert('error', 'Error al enviar el correo. Inténtalo de nuevo.', 'Por favor, verifica los datos ingresados y intenta nuevamente.', 'Asegúrate de que los datos sean correctos y que tu conexión a internet sea estable.');
  }
};
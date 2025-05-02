const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

// Ruta para recibir el formulario
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
        from: 'Tu Nombre <onboarding@resend.dev>',
        to: 'lovnelies@gmail.com',
        subject: 'Nuevo mensaje de contacto',
        html: `
          <h3>Nuevo mensaje de contacto</h3>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong><br/>${message}</p>
        `,
      });
      
      console.log('Respuesta de Resend:', response); // Imprime la respuesta para debug
      
      res.status(200).json({ success: true, info: response });
      
} catch (error) {
    console.error('Error al enviar el email:', error);
    res.status(500).json({ success: false });
  }
  
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

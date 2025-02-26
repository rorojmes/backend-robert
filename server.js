const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Ruta para la raíz (/)
app.get('/', (req, res) => {
    res.send('Bienvenido al backend de Robert Mesa. Usa /api/info para más detalles.');
});

// Ruta existente
app.get('/api/info', (req, res) => {
    res.json({ message: 'Hola desde el backend de Robert Mesa!' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
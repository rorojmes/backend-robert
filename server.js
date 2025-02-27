const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Datos en diferentes idiomas
const translations = {
    es: {
        welcome: 'Bienvenido al backend de Robert Mesa',
        about: 'Soy Robert Mesa, un bailarín profesional con más de 10 años de experiencia en danza contemporánea y clásica. Formado en la prestigiosa Escuela Nacional de Arte (ENA) de Cuba y en Danza Contemporánea de Cuba (DCC), he trabajado con compañías internacionales como Codanza Cuba, Grand Classic Ballet y CreaDance, además de participar en espectáculos destacados como "Havana Nights" en Barcelona. Mi pasión es fusionar técnica y creatividad, ofreciendo clases, coreografías y presentaciones que inspiran.',
        experienceTitle: 'Experiencia',
        worksTitle: 'Obras Bailadas'
    },
    en: {
        welcome: 'Welcome to Robert Mesa\'s backend',
        about: 'I am Robert Mesa, a professional dancer with over 10 years of experience in contemporary and classical dance. Trained at the prestigious National School of Art (ENA) in Cuba and Contemporary Dance of Cuba (DCC), I have worked with international companies such as Codanza Cuba, Grand Classic Ballet, and CreaDance, and participated in notable shows like "Havana Nights" in Barcelona. My passion is to blend technique and creativity, offering classes, choreographies, and performances that inspire.',
        experienceTitle: 'Experience',
        worksTitle: 'Performed Works'
    }
};

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Backend de Robert Mesa. Usa /api/content para obtener contenido traducido.');
});

// Ruta para contenido traducido
app.get('/api/content', (req, res) => {
    // Detecta el idioma del navegador desde el header Accept-Language
    const lang = req.headers['accept-language']?.includes('en') ? 'en' : 'es';
    const content = translations[lang] || translations['es']; // Default a español
    res.json(content);
});

// Ruta de prueba anterior
app.get('/api/info', (req, res) => {
    res.json({ message: 'Hola desde el backend de Robert Mesa!' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
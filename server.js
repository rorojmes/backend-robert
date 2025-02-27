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
    },
    de: {
        welcome: 'Willkommen beim Backend von Robert Mesa',
        about: 'Ich bin Robert Mesa, ein professioneller Tänzer mit über 10 Jahren Erfahrung im zeitgenössischen und klassischen Tanz. Ausgebildet an der renommierten Nationalen Kunstschule (ENA) in Kuba und bei Danza Contemporánea de Cuba (DCC), habe ich mit internationalen Kompanien wie Codanza Cuba, Grand Classic Ballet und CreaDance zusammengearbeitet und an bemerkenswerten Shows wie "Havana Nights" in Barcelona teilgenommen. Meine Leidenschaft ist es, Technik und Kreativität zu vereinen und Unterricht, Choreografien und Aufführungen anzubieten, die inspirieren.',
        experienceTitle: 'Erfahrung',
        worksTitle: 'Aufgeführte Werke'
    },
    it: {
        welcome: 'Benvenuto nel backend di Robert Mesa',
        about: 'Sono Robert Mesa, un ballerino professionista con oltre 10 anni di esperienza nella danza contemporanea e classica. Formatomi presso la prestigiosa Scuola Nazionale d’Arte (ENA) di Cuba e Danza Contemporanea di Cuba (DCC), ho collaborato con compagnie internazionali come Codanza Cuba, Grand Classic Ballet e CreaDance, partecipando a spettacoli di rilievo come "Havana Nights" a Barcellona. La mia passione è fondere tecnica e creatività, offrendo lezioni, coreografie ed esibizioni che ispirano.',
        experienceTitle: 'Esperienze',
        worksTitle: 'Opere Interpretate'
    },
    fr: {
        welcome: 'Bienvenue sur le backend de Robert Mesa',
        about: 'Je suis Robert Mesa, un danseur professionnel avec plus de 10 ans d’expérience en danse contemporaine et classique. Formé à l’École Nationale d’Art (ENA) de Cuba et à Danza Contemporánea de Cuba (DCC), j’ai travaillé avec des compagnies internationales telles que Codanza Cuba, Grand Classic Ballet et CreaDance, et participé à des spectacles marquants comme "Havana Nights" à Barcelone. Ma passion est de combiner technique et créativité, en proposant des cours, des chorégraphies et des performances qui inspirent.',
        experienceTitle: 'Expérience',
        worksTitle: 'Œuvres Dansées'
    },
    pt: {
        welcome: 'Bem-vindo ao backend de Robert Mesa',
        about: 'Sou Robert Mesa, um dançarino profissional com mais de 10 anos de experiência em dança contemporânea e clássica. Formado na prestigiada Escola Nacional de Arte (ENA) de Cuba e na Dança Contemporânea de Cuba (DCC), trabalhei com companhias internacionais como Codanza Cuba, Grand Classic Ballet e CreaDance, além de participar de espetáculos notáveis como "Havana Nights" em Barcelona. Minha paixão é fundir técnica e criatividade, oferecendo aulas, coreografias e apresentações que inspiram.',
        experienceTitle: 'Experiência',
        worksTitle: 'Obras Dançadas'
    }
};

// Ruta para la raíz
app.get('/', (req, res) => {
    res.send('Backend de Robert Mesa. Usa /api/content para obtener contenido traducido.');
});

// Ruta para contenido traducido
app.get('/api/content', (req, res) => {
    // Detecta el idioma del navegador desde el header Accept-Language
    const acceptLanguage = req.headers['accept-language'] || '';
    let lang = 'en'; // Inglés por defecto

    if (acceptLanguage.includes('es')) lang = 'es';
    else if (acceptLanguage.includes('de')) lang = 'de';
    else if (acceptLanguage.includes('it')) lang = 'it';
    else if (acceptLanguage.includes('fr')) lang = 'fr';
    else if (acceptLanguage.includes('pt')) lang = 'pt';

    const content = translations[lang];
    res.json(content);
});

// Ruta de prueba
app.get('/api/info', (req, res) => {
    res.json({ message: 'Hola desde el backend de Robert Mesa!' });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
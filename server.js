const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const translations = {
    es: {
        home: {
            bio: 'Robert Mesa, bailarín profesional con más de 10 años de experiencia en danza contemporánea y clásica.'
        },
        about: {
            title: 'Sobre Mí',
            story: 'Soy Robert Mesa, un bailarín apasionado nacido en Cuba. Desde pequeño, el movimiento y la música han sido mi vida. Mi carrera me ha llevado a escenarios internacionales, donde he fusionado técnica y creatividad para inspirar a otros.',
            education: 'Formado en la Escuela Nacional de Arte (ENA) de Cuba (2014) y en Danza Contemporánea de Cuba (DCC) (2017-2018).',
            achievements: 'Participación en "Havana Nights" (Barcelona, 2023), Premios Butaca con "Odissea" (CreaDance, 2024), y colaboraciones con coreógrafos de renombre como Miguel Iglesia y Fleur Darkin.'
        },
        portfolio: {
            title: 'Portafolio',
            projects: 'Proyectos destacados: "Havana Nights" (2023), "Odissea" (2024), "Sala Scala Choreography" (2024-2025).'
        },
        services: {
            title: 'Servicios',
            classes: 'Clases de danza contemporánea y clásica para todos los niveles. Horarios: Lunes a viernes, 10:00-12:00 y 18:00-20:00. Tarifas: 20€/hora (individual), 15€/hora (grupos).',
            choreography: 'Coreografías personalizadas para eventos, competencias o producciones. Contacta para presupuestos.'
        },
        contact: {
            title: 'Contacto',
            form: 'Envíame un mensaje',
            email: 'Correo Electrónico: rorojmes@gmail.com'
        },
        calendar: {
            title: 'Calendario',
            events: 'Próximos eventos: Taller de danza en Barcelona (15 Mar 2025), Presentación en Sala Scala (20 Abr 2025).',
            bookings: 'Reserva clases o entradas enviándome un correo.'
        }
    },
    en: {
        home: {
            bio: 'Robert Mesa, professional dancer with over 10 years of experience in contemporary and classical dance.'
        },
        about: {
            title: 'About Me',
            story: 'I am Robert Mesa, a passionate dancer born in Cuba. Since childhood, movement and music have been my life. My career has taken me to international stages, where I’ve blended technique and creativity to inspire others.',
            education: 'Trained at the National School of Art (ENA) in Cuba (2014) and Contemporary Dance of Cuba (DCC) (2017-2018).',
            achievements: 'Participation in "Havana Nights" (Barcelona, 2023), Butaca Awards with "Odissea" (CreaDance, 2024), and collaborations with renowned choreographers like Miguel Iglesia and Fleur Darkin.'
        },
        portfolio: {
            title: 'Portfolio',
            projects: 'Featured projects: "Havana Nights" (2023), "Odissea" (2024), "Sala Scala Choreography" (2024-2025).'
        },
        services: {
            title: 'Services',
            classes: 'Contemporary and classical dance classes for all levels. Schedule: Monday to Friday, 10:00-12:00 and 18:00-20:00. Rates: €20/hour (individual), €15/hour (groups).',
            choreography: 'Custom choreographies for events, competitions, or productions. Contact for quotes.'
        },
        contact: {
            title: 'Contact',
            form: 'Send me a message',
            email: 'Email: rorojmes@gmail.com'
        },
        calendar: {
            title: 'Calendar',
            events: 'Upcoming events: Dance workshop in Barcelona (15 Mar 2025), Performance at Sala Scala (20 Apr 2025).',
            bookings: 'Book classes or tickets by emailing me.'
        }
    },
    de: {
        home: {
            bio: 'Robert Mesa, professioneller Tänzer mit über 10 Jahren Erfahrung im zeitgenössischen und klassischen Tanz.'
        },
        about: {
            title: 'Über Mich',
            story: 'Ich bin Robert Mesa, ein leidenschaftlicher Tänzer aus Kuba. Seit meiner Kindheit sind Bewegung und Musik mein Leben. Meine Karriere hat mich auf internationale Bühnen geführt, wo ich Technik und Kreativität vereint habe, um andere zu inspirieren.',
            education: 'Ausbildung an der Nationalen Kunstschule (ENA) in Kuba (2014) und bei Danza Contemporánea de Cuba (DCC) (2017-2018).',
            achievements: 'Teilnahme an "Havana Nights" (Barcelona, 2023), Butaca-Preise mit "Odissea" (CreaDance, 2024) und Zusammenarbeit mit bekannten Choreografen wie Miguel Iglesia und Fleur Darkin.'
        },
        portfolio: {
            title: 'Portfolio',
            projects: 'Hervorgehobene Projekte: "Havana Nights" (2023), "Odissea" (2024), "Sala Scala Choreography" (2024-2025).'
        },
        services: {
            title: 'Dienstleistungen',
            classes: 'Klassen für zeitgenössischen und klassischen Tanz für alle Niveaus. Zeitplan: Montag bis Freitag, 10:00-12:00 und 18:00-20:00. Preise: 20€/Stunde (Einzel), 15€/Stunde (Gruppen).',
            choreography: 'Maßgeschneiderte Choreografien für Veranstaltungen, Wettbewerbe oder Produktionen. Kontakt für Angebote.'
        },
        contact: {
            title: 'Kontakt',
            form: 'Schick mir eine Nachricht',
            email: 'E-Mail: rorojmes@gmail.com'
        },
        calendar: {
            title: 'Kalender',
            events: 'Kommende Veranstaltungen: Tanzworkshop in Barcelona (15. März 2025), Aufführung in Sala Scala (20. April 2025).',
            bookings: 'Buche Klassen oder Tickets per E-Mail an mich.'
        }
    },
    it: {
        home: {
            bio: 'Robert Mesa, ballerino professionista con oltre 10 anni di esperienza nella danza contemporanea e classica.'
        },
        about: {
            title: 'Su di Me',
            story: 'Sono Robert Mesa, un ballerino appassionato nato a Cuba. Fin da piccolo, il movimento e la musica sono stati la mia vita. La mia carriera mi ha portato su palcoscenici internazionali, dove ho fuso tecnica e creatività per ispirare gli altri.',
            education: 'Formato presso la Scuola Nazionale d’Arte (ENA) di Cuba (2014) e Danza Contemporanea di Cuba (DCC) (2017-2018).',
            achievements: 'Partecipazione a "Havana Nights" (Barcellona, 2023), Premi Butaca con "Odissea" (CreaDance, 2024) e collaborazioni con coreografi rinomati come Miguel Iglesia e Fleur Darkin.'
        },
        portfolio: {
            title: 'Portfolio',
            projects: 'Progetti in evidenza: "Havana Nights" (2023), "Odissea" (2024), "Sala Scala Choreography" (2024-2025).'
        },
        services: {
            title: 'Servizi',
            classes: 'Lezioni di danza contemporanea e classica per tutti i livelli. Orari: lunedì-venerdì, 10:00-12:00 e 18:00-20:00. Tariffe: 20€/ora (individuale), 15€/ora (gruppi).',
            choreography: 'Coreografie personalizzate per eventi, competizioni o produzioni. Contatta per preventivi.'
        },
        contact: {
            title: 'Contatto',
            form: 'Inviami un messaggio',
            email: 'Email: rorojmes@gmail.com'
        },
        calendar: {
            title: 'Calendario',
            events: 'Eventi imminenti: Workshop di danza a Barcellona (15 marzo 2025), Spettacolo a Sala Scala (20 aprile 2025).',
            bookings: 'Prenota lezioni o biglietti inviandomi un’email.'
        }
    },
    fr: {
        home: {
            bio: 'Robert Mesa, danseur professionnel avec plus de 10 ans d’expérience en danse contemporaine et classique.'
        },
        about: {
            title: 'À Propos de Moi',
            story: 'Je suis Robert Mesa, un danseur passionné né à Cuba. Depuis mon enfance, le mouvement et la musique sont ma vie. Ma carrière m’a conduit sur des scènes internationales, où j’ai combiné technique et créativité pour inspirer les autres.',
            education: 'Formé à l’École Nationale d’Art (ENA) de Cuba (2014) et à Danza Contemporánea de Cuba (DCC) (2017-2018).',
            achievements: 'Participation à "Havana Nights" (Barcelone, 2023), Prix Butaca avec "Odissea" (CreaDance, 2024) et collaborations avec des chorégraphes renommés comme Miguel Iglesia et Fleur Darkin.'
        },
        portfolio: {
            title: 'Portfolio',
            projects: 'Projets marquants: "Havana Nights" (2023), "Odissea" (2024), "Sala Scala Choreography" (2024-2025).'
        },
        services: {
            title: 'Services',
            classes: 'Cours de danse contemporaine et classique pour tous les niveaux. Horaires: lundi-vendredi, 10h00-12h00 et 18h00-20h00. Tarifs: 20€/heure (individuel), 15€/heure (groupes).',
            choreography: 'Chorégraphies personnalisées pour événements, compétitions ou productions. Contactez pour un devis.'
        },
        contact: {
            title: 'Contact',
            form: 'Envoyez-moi un message',
            email: 'Email: rorojmes@gmail.com'
        },
        calendar: {
            title: 'Calendrier',
            events: 'Événements à venir: Atelier de danse à Barcelone (15 mars 2025), Performance à Sala Scala (20 avril 2025).',
            bookings: 'Réservez des cours ou des billets en m’envoyant un email.'
        }
    },
    pt: {
        home: {
            bio: 'Robert Mesa, dançarino profissional com mais de 10 anos de experiência em dança contemporânea e clássica.'
        },
        about: {
            title: 'Sobre Mim',
            story: 'Sou Robert Mesa, um dançarino apaixonado nascido em Cuba. Desde pequeno, o movimento e a música são a minha vida. Minha carreira me levou a palcos internacionais, onde fundi técnica e criatividade para inspirar outros.',
            education: 'Formado na Escola Nacional de Arte (ENA) de Cuba (2014) e na Dança Contemporânea de Cuba (DCC) (2017-2018).',
            achievements: 'Participação em "Havana Nights" (Barcelona, 2023), Prêmios Butaca com "Odissea" (CreaDance, 2024) e colaborações com coreógrafos renomados como Miguel Iglesia e Fleur Darkin.'
        },
        portfolio: {
            title: 'Portfólio',
            projects: 'Projetos destacados: "Havana Nights" (2023), "Odissea" (2024), "Sala Scala Choreography" (2024-2025).'
        },
        services: {
            title: 'Serviços',
            classes: 'Aulas de dança contemporânea e clássica para todos os níveis. Horários: segunda a sexta, 10h00-12h00 e 18h00-20h00. Tarifas: 20€/hora (individual), 15€/hora (grupos).',
            choreography: 'Coreografias personalizadas para eventos, competições ou produções. Contate para orçamentos.'
        },
        contact: {
            title: 'Contato',
            form: 'Envie-me uma mensagem',
            email: 'Email: rorojmes@gmail.com'
        },
        calendar: {
            title: 'Calendário',
            events: 'Eventos futuros: Workshop de dança em Barcelona (15 Mar 2025), Apresentação na Sala Scala (20 Abr 2025).',
            bookings: 'Reserve aulas ou ingressos enviando-me um email.'
        }
    }
};

app.get('/', (req, res) => {
    res.send('Backend de Robert Mesa. Usa /api/content para obtener contenido traducido.');
});

app.get('/api/content', (req, res) => {
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

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
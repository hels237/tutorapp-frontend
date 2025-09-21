#!/usr/bin/env node

/**
 * Script pour ajouter les traductions de la page sciences
 */

const fs = require('fs');
const path = require('path');

const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Traductions pour la page sciences
const SCIENCES_TRANSLATIONS = {
  fr: {
    // Page sciences
    "subjects.sciences.name": "Sciences",
    "subjects.sciences.hero.subtitle": "Explorez le monde des sciences avec nos tuteurs passionnés. Physique, chimie, biologie et sciences de la terre.",
    "subjects.sciences.tutorCount": "189 tuteurs",
    "subjects.sciences.allLevels": "Collège à Supérieur",
    "subjects.sciences.priceFrom": "À partir de 28€/h",
    "subjects.sciences.expertiseTitle": "Disciplines Scientifiques",
    "subjects.sciences.expertiseSubtitle": "De la théorie à la pratique, maîtrisez toutes les sciences",
    "subjects.sciences.ctaTitle": "Prêt à Explorer les Sciences ?",
    "subjects.sciences.ctaSubtitle": "Trouvez le tuteur parfait pour vous accompagner dans votre parcours scientifique",
    "subjects.sciences.findTutor": "Trouver un Tuteur en Sciences",
    
    // Topics
    "subjects.sciences.topics.physics.name": "Physique",
    "subjects.sciences.topics.physics.description": "Mécanique, thermodynamique, électricité, optique",
    "subjects.sciences.topics.chemistry.name": "Chimie",
    "subjects.sciences.topics.chemistry.description": "Chimie générale, organique, analytique",
    "subjects.sciences.topics.biology.name": "Biologie",
    "subjects.sciences.topics.biology.description": "Biologie cellulaire, génétique, écologie",
    "subjects.sciences.topics.earth.name": "Sciences de la Terre",
    "subjects.sciences.topics.earth.description": "Géologie, climatologie, environnement",
    "subjects.sciences.topics.experimental.name": "Sciences Expérimentales",
    "subjects.sciences.topics.experimental.description": "Méthodes scientifiques, expérimentation",
    "subjects.sciences.topics.physicsChemistry.name": "Physique-Chimie",
    "subjects.sciences.topics.physicsChemistry.description": "Programme intégré collège et lycée",
    
    // Levels
    "subjects.sciences.levels.middle": "Collège",
    "subjects.sciences.levels.high": "Lycée",
    "subjects.sciences.levels.higher": "Supérieur",
    
    // Common
    "subjects.sciences.tutors": "tuteurs",
    "subjects.sciences.levels": "Niveaux :"
  },
  en: {
    // Page sciences
    "subjects.sciences.name": "Sciences",
    "subjects.sciences.hero.subtitle": "Explore the world of science with our passionate tutors. Physics, chemistry, biology and earth sciences.",
    "subjects.sciences.tutorCount": "189 tutors",
    "subjects.sciences.allLevels": "Middle School to Higher Education",
    "subjects.sciences.priceFrom": "From €28/h",
    "subjects.sciences.expertiseTitle": "Scientific Disciplines",
    "subjects.sciences.expertiseSubtitle": "From theory to practice, master all sciences",
    "subjects.sciences.ctaTitle": "Ready to Explore Sciences?",
    "subjects.sciences.ctaSubtitle": "Find the perfect tutor to accompany you on your scientific journey",
    "subjects.sciences.findTutor": "Find a Science Tutor",
    
    // Topics
    "subjects.sciences.topics.physics.name": "Physics",
    "subjects.sciences.topics.physics.description": "Mechanics, thermodynamics, electricity, optics",
    "subjects.sciences.topics.chemistry.name": "Chemistry",
    "subjects.sciences.topics.chemistry.description": "General, organic, analytical chemistry",
    "subjects.sciences.topics.biology.name": "Biology",
    "subjects.sciences.topics.biology.description": "Cell biology, genetics, ecology",
    "subjects.sciences.topics.earth.name": "Earth Sciences",
    "subjects.sciences.topics.earth.description": "Geology, climatology, environment",
    "subjects.sciences.topics.experimental.name": "Experimental Sciences",
    "subjects.sciences.topics.experimental.description": "Scientific methods, experimentation",
    "subjects.sciences.topics.physicsChemistry.name": "Physics-Chemistry",
    "subjects.sciences.topics.physicsChemistry.description": "Integrated middle and high school program",
    
    // Levels
    "subjects.sciences.levels.middle": "Middle School",
    "subjects.sciences.levels.high": "High School",
    "subjects.sciences.levels.higher": "Higher Education",
    
    // Common
    "subjects.sciences.tutors": "tutors",
    "subjects.sciences.levels": "Levels:"
  },
  es: {
    // Page sciences
    "subjects.sciences.name": "Ciencias",
    "subjects.sciences.hero.subtitle": "Explora el mundo de las ciencias con nuestros tutores apasionados. Física, química, biología y ciencias de la tierra.",
    "subjects.sciences.tutorCount": "189 tutores",
    "subjects.sciences.allLevels": "Secundaria a Superior",
    "subjects.sciences.priceFrom": "Desde €28/h",
    "subjects.sciences.expertiseTitle": "Disciplinas Científicas",
    "subjects.sciences.expertiseSubtitle": "De la teoría a la práctica, domina todas las ciencias",
    "subjects.sciences.ctaTitle": "¿Listo para Explorar las Ciencias?",
    "subjects.sciences.ctaSubtitle": "Encuentra el tutor perfecto para acompañarte en tu viaje científico",
    "subjects.sciences.findTutor": "Encontrar un Tutor de Ciencias",
    
    // Topics
    "subjects.sciences.topics.physics.name": "Física",
    "subjects.sciences.topics.physics.description": "Mecánica, termodinámica, electricidad, óptica",
    "subjects.sciences.topics.chemistry.name": "Química",
    "subjects.sciences.topics.chemistry.description": "Química general, orgánica, analítica",
    "subjects.sciences.topics.biology.name": "Biología",
    "subjects.sciences.topics.biology.description": "Biología celular, genética, ecología",
    "subjects.sciences.topics.earth.name": "Ciencias de la Tierra",
    "subjects.sciences.topics.earth.description": "Geología, climatología, medio ambiente",
    "subjects.sciences.topics.experimental.name": "Ciencias Experimentales",
    "subjects.sciences.topics.experimental.description": "Métodos científicos, experimentación",
    "subjects.sciences.topics.physicsChemistry.name": "Física-Química",
    "subjects.sciences.topics.physicsChemistry.description": "Programa integrado de secundaria y bachillerato",
    
    // Levels
    "subjects.sciences.levels.middle": "Secundaria",
    "subjects.sciences.levels.high": "Bachillerato",
    "subjects.sciences.levels.higher": "Superior",
    
    // Common
    "subjects.sciences.tutors": "tutores",
    "subjects.sciences.levels": "Niveles:"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(SCIENCES_TRANSLATIONS).forEach(lang => {
    const translations = SCIENCES_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('subjects.sciences.name')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Sciences page translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions sciences ajoutées à i18n.ts');
}

function main() {
  console.log('📝 Ajout des traductions pour la page sciences...\n');
  
  addTranslationsToI18n();
  
  console.log('\n🎉 Traductions sciences ajoutées avec succès !');
  console.log('✅ Support complet FR/EN/ES');
  console.log('🌍 ' + Object.keys(SCIENCES_TRANSLATIONS.fr).length + ' clés de traduction ajoutées');
}

if (require.main === module) {
  main();
}

module.exports = { addTranslationsToI18n };

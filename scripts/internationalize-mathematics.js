#!/usr/bin/env node

/**
 * Script pour internationaliser la page mathematics
 * Applique les normes internationales complètes
 */

const fs = require('fs');
const path = require('path');

const MATH_PAGE_PATH = path.join(__dirname, '../app/subjects/mathematics/page.tsx');
const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Nouvelles traductions pour la page mathematics
const MATH_TRANSLATIONS = {
  fr: {
    // Metadata
    "subjects.mathematics.title": "Mathématiques - TutorApp",
    "subjects.mathematics.description": "Trouvez les meilleurs tuteurs en mathématiques. Algèbre, géométrie, calcul, statistiques et plus encore.",
    
    // Hero section
    "subjects.mathematics.name": "Mathématiques",
    "subjects.mathematics.hero.subtitle": "Maîtrisez les mathématiques avec nos tuteurs experts. De l'algèbre de base aux mathématiques supérieures, progressez à votre rythme.",
    "subjects.mathematics.tutorCount": "245 tuteurs",
    "subjects.mathematics.allLevels": "Tous niveaux",
    "subjects.mathematics.priceFrom": "À partir de 25€/h",
    
    // Sections
    "subjects.mathematics.expertiseTitle": "Domaines d'Expertise",
    "subjects.mathematics.expertiseSubtitle": "Nos tuteurs couvrent tous les domaines des mathématiques",
    "subjects.mathematics.featuredTitle": "Tuteurs Recommandés",
    "subjects.mathematics.featuredSubtitle": "Découvrez nos tuteurs les mieux notés en mathématiques",
    
    // Topics
    "subjects.mathematics.topics.algebra.name": "Algèbre",
    "subjects.mathematics.topics.algebra.description": "Équations, inéquations, fonctions, polynômes",
    "subjects.mathematics.topics.geometry.name": "Géométrie",
    "subjects.mathematics.topics.geometry.description": "Géométrie plane, dans l'espace, trigonométrie",
    "subjects.mathematics.topics.analysis.name": "Analyse",
    "subjects.mathematics.topics.analysis.description": "Dérivées, intégrales, limites, suites",
    "subjects.mathematics.topics.statistics.name": "Statistiques",
    "subjects.mathematics.topics.statistics.description": "Probabilités, statistiques descriptives",
    "subjects.mathematics.topics.arithmetic.name": "Arithmétique",
    "subjects.mathematics.topics.arithmetic.description": "Nombres entiers, PGCD, PPCM, congruences",
    "subjects.mathematics.topics.applied.name": "Mathématiques Appliquées",
    "subjects.mathematics.topics.applied.description": "Optimisation, recherche opérationnelle",
    
    // Levels
    "subjects.mathematics.levels.middle": "Collège",
    "subjects.mathematics.levels.high": "Lycée",
    "subjects.mathematics.levels.higher": "Supérieur",
    
    // Common
    "subjects.mathematics.tutors": "tuteurs",
    "subjects.mathematics.levels": "Niveaux :",
    "subjects.mathematics.specialties": "Spécialités :",
    "subjects.mathematics.experience": "d'expérience",
    "subjects.mathematics.viewProfile": "Voir le profil",
    "subjects.mathematics.viewAllTutors": "Voir tous les tuteurs"
  },
  en: {
    // Metadata
    "subjects.mathematics.title": "Mathematics - TutorApp",
    "subjects.mathematics.description": "Find the best mathematics tutors. Algebra, geometry, calculus, statistics and more.",
    
    // Hero section
    "subjects.mathematics.name": "Mathematics",
    "subjects.mathematics.hero.subtitle": "Master mathematics with our expert tutors. From basic algebra to advanced mathematics, progress at your own pace.",
    "subjects.mathematics.tutorCount": "245 tutors",
    "subjects.mathematics.allLevels": "All levels",
    "subjects.mathematics.priceFrom": "From €25/h",
    
    // Sections
    "subjects.mathematics.expertiseTitle": "Areas of Expertise",
    "subjects.mathematics.expertiseSubtitle": "Our tutors cover all areas of mathematics",
    "subjects.mathematics.featuredTitle": "Recommended Tutors",
    "subjects.mathematics.featuredSubtitle": "Discover our top-rated mathematics tutors",
    
    // Topics
    "subjects.mathematics.topics.algebra.name": "Algebra",
    "subjects.mathematics.topics.algebra.description": "Equations, inequalities, functions, polynomials",
    "subjects.mathematics.topics.geometry.name": "Geometry",
    "subjects.mathematics.topics.geometry.description": "Plane geometry, spatial geometry, trigonometry",
    "subjects.mathematics.topics.analysis.name": "Analysis",
    "subjects.mathematics.topics.analysis.description": "Derivatives, integrals, limits, sequences",
    "subjects.mathematics.topics.statistics.name": "Statistics",
    "subjects.mathematics.topics.statistics.description": "Probability, descriptive statistics",
    "subjects.mathematics.topics.arithmetic.name": "Arithmetic",
    "subjects.mathematics.topics.arithmetic.description": "Integers, GCD, LCM, congruences",
    "subjects.mathematics.topics.applied.name": "Applied Mathematics",
    "subjects.mathematics.topics.applied.description": "Optimization, operations research",
    
    // Levels
    "subjects.mathematics.levels.middle": "Middle School",
    "subjects.mathematics.levels.high": "High School",
    "subjects.mathematics.levels.higher": "Higher Education",
    
    // Common
    "subjects.mathematics.tutors": "tutors",
    "subjects.mathematics.levels": "Levels:",
    "subjects.mathematics.specialties": "Specialties:",
    "subjects.mathematics.experience": "years experience",
    "subjects.mathematics.viewProfile": "View Profile",
    "subjects.mathematics.viewAllTutors": "View All Tutors"
  },
  es: {
    // Metadata
    "subjects.mathematics.title": "Matemáticas - TutorApp",
    "subjects.mathematics.description": "Encuentra los mejores tutores de matemáticas. Álgebra, geometría, cálculo, estadísticas y más.",
    
    // Hero section
    "subjects.mathematics.name": "Matemáticas",
    "subjects.mathematics.hero.subtitle": "Domina las matemáticas con nuestros tutores expertos. Desde álgebra básica hasta matemáticas superiores, progresa a tu ritmo.",
    "subjects.mathematics.tutorCount": "245 tutores",
    "subjects.mathematics.allLevels": "Todos los niveles",
    "subjects.mathematics.priceFrom": "Desde €25/h",
    
    // Sections
    "subjects.mathematics.expertiseTitle": "Áreas de Especialización",
    "subjects.mathematics.expertiseSubtitle": "Nuestros tutores cubren todas las áreas de las matemáticas",
    "subjects.mathematics.featuredTitle": "Tutores Recomendados",
    "subjects.mathematics.featuredSubtitle": "Descubre nuestros tutores de matemáticas mejor valorados",
    
    // Topics
    "subjects.mathematics.topics.algebra.name": "Álgebra",
    "subjects.mathematics.topics.algebra.description": "Ecuaciones, inecuaciones, funciones, polinomios",
    "subjects.mathematics.topics.geometry.name": "Geometría",
    "subjects.mathematics.topics.geometry.description": "Geometría plana, espacial, trigonometría",
    "subjects.mathematics.topics.analysis.name": "Análisis",
    "subjects.mathematics.topics.analysis.description": "Derivadas, integrales, límites, sucesiones",
    "subjects.mathematics.topics.statistics.name": "Estadísticas",
    "subjects.mathematics.topics.statistics.description": "Probabilidad, estadística descriptiva",
    "subjects.mathematics.topics.arithmetic.name": "Aritmética",
    "subjects.mathematics.topics.arithmetic.description": "Números enteros, MCD, MCM, congruencias",
    "subjects.mathematics.topics.applied.name": "Matemáticas Aplicadas",
    "subjects.mathematics.topics.applied.description": "Optimización, investigación operativa",
    
    // Levels
    "subjects.mathematics.levels.middle": "Secundaria",
    "subjects.mathematics.levels.high": "Bachillerato",
    "subjects.mathematics.levels.higher": "Superior",
    
    // Common
    "subjects.mathematics.tutors": "tutores",
    "subjects.mathematics.levels": "Niveles:",
    "subjects.mathematics.specialties": "Especialidades:",
    "subjects.mathematics.experience": "años de experiencia",
    "subjects.mathematics.viewProfile": "Ver Perfil",
    "subjects.mathematics.viewAllTutors": "Ver Todos los Tutores"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(MATH_TRANSLATIONS).forEach(lang => {
    const translations = MATH_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('subjects.mathematics.title')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Mathematics page translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions mathematics ajoutées à i18n.ts');
}

function internationalizeMathPage() {
  if (!fs.existsSync(MATH_PAGE_PATH)) {
    console.log('❌ Fichier mathematics/page.tsx non trouvé');
    return false;
  }
  
  let content = fs.readFileSync(MATH_PAGE_PATH, 'utf8');
  
  // Créer une sauvegarde
  const backupPath = MATH_PAGE_PATH + '.backup-i18n';
  fs.writeFileSync(backupPath, content);
  
  // 1. Ajouter les imports
  content = content.replace(
    'import { Calculator, TrendingUp, PieChart, BarChart3, Sigma, Triangle, ArrowRight } from "lucide-react"',
    'import { Calculator, TrendingUp, PieChart, BarChart3, Sigma, Triangle, ArrowRight } from "lucide-react"\nimport { useI18n } from "@/contexts/i18n-context"'
  );
  
  // 2. Ajouter "use client"
  content = content.replace(
    'import { Header }',
    '"use client"\n\nimport { Header }'
  );
  
  // 3. Remplacer les métadonnées
  content = content.replace(
    /export const metadata: Metadata = \{[\s\S]*?\}/,
    `// Metadata sera gérée dynamiquement avec useI18n`
  );
  
  // 4. Ajouter le hook useI18n dans le composant
  content = content.replace(
    'export default function MathematicsPage() {\n  return (',
    `export default function MathematicsPage() {
  const { t } = useI18n()
  
  // Données normalisées avec traductions
  const mathTopics = [
    {
      key: "algebra",
      name: t("subjects.mathematics.topics.algebra.name"),
      description: t("subjects.mathematics.topics.algebra.description"),
      icon: Sigma,
      tutorCount: 89,
      levels: [
        t("subjects.mathematics.levels.middle"),
        t("subjects.mathematics.levels.high"),
        t("subjects.mathematics.levels.higher")
      ],
    },
    {
      key: "geometry",
      name: t("subjects.mathematics.topics.geometry.name"),
      description: t("subjects.mathematics.topics.geometry.description"),
      icon: Triangle,
      tutorCount: 76,
      levels: [
        t("subjects.mathematics.levels.middle"),
        t("subjects.mathematics.levels.high")
      ],
    },
    {
      key: "analysis",
      name: t("subjects.mathematics.topics.analysis.name"),
      description: t("subjects.mathematics.topics.analysis.description"),
      icon: TrendingUp,
      tutorCount: 65,
      levels: [
        t("subjects.mathematics.levels.high"),
        t("subjects.mathematics.levels.higher")
      ],
    },
    {
      key: "statistics",
      name: t("subjects.mathematics.topics.statistics.name"),
      description: t("subjects.mathematics.topics.statistics.description"),
      icon: BarChart3,
      tutorCount: 54,
      levels: [
        t("subjects.mathematics.levels.high"),
        t("subjects.mathematics.levels.higher")
      ],
    },
    {
      key: "arithmetic",
      name: t("subjects.mathematics.topics.arithmetic.name"),
      description: t("subjects.mathematics.topics.arithmetic.description"),
      icon: Calculator,
      tutorCount: 43,
      levels: [
        t("subjects.mathematics.levels.middle"),
        t("subjects.mathematics.levels.high")
      ],
    },
    {
      key: "applied",
      name: t("subjects.mathematics.topics.applied.name"),
      description: t("subjects.mathematics.topics.applied.description"),
      icon: PieChart,
      tutorCount: 32,
      levels: [t("subjects.mathematics.levels.higher")],
    },
  ]

  const featuredTutors = [
    {
      name: "Marie Dubois",
      rating: 4.9,
      reviews: 127,
      price: 35,
      specialties: [
        t("subjects.mathematics.topics.algebra.name"),
        t("subjects.mathematics.topics.analysis.name")
      ],
      experience: "8",
      education: "Agrégée de Mathématiques",
    },
    {
      name: "Pierre Martin",
      rating: 4.8,
      reviews: 98,
      price: 40,
      specialties: [
        t("subjects.mathematics.topics.geometry.name"),
        t("subjects.mathematics.topics.statistics.name")
      ],
      experience: "12",
      education: "Docteur en Mathématiques",
    },
    {
      name: "Sophie Laurent",
      rating: 4.9,
      reviews: 156,
      price: 30,
      specialties: [
        t("subjects.mathematics.topics.arithmetic.name"),
        t("subjects.mathematics.topics.algebra.name")
      ],
      experience: "6",
      education: "Master en Mathématiques",
    },
  ]

  return (`
  );
  
  // 5. Remplacer les textes hardcodés dans le JSX
  const replacements = [
    // Hero section
    { from: '>Mathématiques<', to: `>{t("subjects.mathematics.name")}<` },
    { from: /Maîtrisez les mathématiques avec nos tuteurs experts\. De l'algèbre de base aux mathématiques supérieures,\s*progressez à votre rythme\./, to: `{t("subjects.mathematics.hero.subtitle")}` },
    { from: '>245 tuteurs<', to: `>{t("subjects.mathematics.tutorCount")}<` },
    { from: '>Tous niveaux<', to: `>{t("subjects.mathematics.allLevels")}<` },
    { from: '>À partir de 25€/h<', to: `>{t("subjects.mathematics.priceFrom")}<` },
    
    // Sections
    { from: '>Domaines d\'Expertise<', to: `>{t("subjects.mathematics.expertiseTitle")}<` },
    { from: /Nos tuteurs couvrent tous les domaines des mathématiques/, to: `{t("subjects.mathematics.expertiseSubtitle")}` },
    { from: '>Tuteurs Recommandés<', to: `>{t("subjects.mathematics.featuredTitle")}<` },
    { from: /Découvrez nos tuteurs les mieux notés en mathématiques/, to: `{t("subjects.mathematics.featuredSubtitle")}` },
    
    // Common elements
    { from: /\{topic\.tutorCount\} tuteurs/, to: `{topic.tutorCount} {t("subjects.mathematics.tutors")}` },
    { from: '>Niveaux :<', to: `>{t("subjects.mathematics.levels")}<` },
    { from: '>Spécialités :<', to: `>{t("subjects.mathematics.specialties")}<` },
    { from: /\{tutor\.experience\} d'expérience/, to: `{tutor.experience} {t("subjects.mathematics.experience")}` },
    { from: '>Voir le profil<', to: `>{t("subjects.mathematics.viewProfile")}<` },
    { from: /Voir tous les tuteurs/, to: `{t("subjects.mathematics.viewAllTutors")}` }
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(new RegExp(from, 'g'), to);
  });
  
  // 6. Supprimer les anciennes définitions de données
  content = content.replace(/const mathTopics = \[[\s\S]*?\]/g, '');
  content = content.replace(/const featuredTutors = \[[\s\S]*?\]/g, '');
  
  fs.writeFileSync(MATH_PAGE_PATH, content);
  console.log('✅ Page mathematics internationalisée');
  return true;
}

function main() {
  console.log('🌍 Internationalisation de la page mathematics...\n');
  
  console.log('📝 Ajout des traductions...');
  addTranslationsToI18n();
  
  console.log('\n🔧 Internationalisation du composant...');
  internationalizeMathPage();
  
  console.log('\n🎉 Page mathematics entièrement internationalisée !');
  console.log('✅ Support complet FR/EN/ES');
  console.log('🌍 Normes internationales appliquées');
}

if (require.main === module) {
  main();
}

module.exports = { internationalizeMathPage, addTranslationsToI18n };

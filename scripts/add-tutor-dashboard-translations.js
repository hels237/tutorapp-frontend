#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Nouvelles traductions pour le dashboard tuteur
const newTranslations = {
  fr: {
    // Tutor Dashboard
    "dashboard.tutor.title": "Tableau de bord Tuteur",
    "dashboard.tutor.welcome": "Bienvenue,",
    "dashboard.tutor.notifications": "Notifications",
    "dashboard.tutor.settings": "Paramètres",
    
    // Tabs
    "dashboard.tutor.tabs.overview": "Vue d'ensemble",
    "dashboard.tutor.tabs.schedule": "Planning",
    "dashboard.tutor.tabs.students": "Étudiants",
    "dashboard.tutor.tabs.earnings": "Revenus",
    "dashboard.tutor.tabs.profile": "Profil",
    
    // Overview stats
    "dashboard.tutor.stats.lessonsThisMonth": "Cours ce mois",
    "dashboard.tutor.stats.activeStudents": "Étudiants actifs",
    "dashboard.tutor.stats.averageRating": "Note moyenne",
    "dashboard.tutor.stats.earningsThisMonth": "Revenus ce mois",
    "dashboard.tutor.stats.lessonsCompare": "par rapport au mois dernier",
    "dashboard.tutor.stats.newStudents": "nouveaux ce mois",
    "dashboard.tutor.stats.basedOnReviews": "Basé sur",
    "dashboard.tutor.stats.reviews": "avis",
    "dashboard.tutor.stats.vsLastMonth": "vs mois dernier",
    
    // Profile status
    "dashboard.tutor.profileStatus.title": "Statut du profil",
    "dashboard.tutor.profileStatus.verified": "Profil vérifié",
    "dashboard.tutor.profileStatus.description": "Votre profil est complet et vérifié",
    "dashboard.tutor.profileStatus.badge": "Vérifié",
    
    // Upcoming lessons
    "dashboard.tutor.upcomingLessons.title": "Prochains cours",
    "dashboard.tutor.upcomingLessons.with": "avec",
    "dashboard.tutor.upcomingLessons.confirmed": "Confirmé",
    "dashboard.tutor.upcomingLessons.pending": "En attente",
    "dashboard.tutor.upcomingLessons.start": "Démarrer",
    
    // Schedule
    "dashboard.tutor.schedule.title": "Gestion du planning",
    "dashboard.tutor.schedule.description": "Gérez vos disponibilités et créneaux",
    "dashboard.tutor.schedule.calendar": "Calendrier interactif",
    "dashboard.tutor.schedule.calendarDescription": "Gérez vos disponibilités et visualisez vos cours",
    "dashboard.tutor.schedule.openCalendar": "Ouvrir le calendrier",
    
    // Students
    "dashboard.tutor.students.title": "Mes étudiants",
    "dashboard.tutor.students.description": "Suivez les progrès de vos étudiants",
    "dashboard.tutor.students.lessons": "cours",
    "dashboard.tutor.students.lastLesson": "Dernier cours:",
    "dashboard.tutor.students.progress": "Progression",
    
    // Earnings
    "dashboard.tutor.earnings.title": "Revenus",
    "dashboard.tutor.earnings.thisMonth": "Ce mois",
    "dashboard.tutor.earnings.lastMonth": "Mois dernier",
    "dashboard.tutor.earnings.pending": "En attente",
    "dashboard.tutor.earnings.totalEarned": "Total gagné",
    "dashboard.tutor.earnings.payments": "Paiements",
    "dashboard.tutor.earnings.paymentMethod": "Méthode de paiement",
    "dashboard.tutor.earnings.bankTransfer": "Virement bancaire",
    "dashboard.tutor.earnings.modify": "Modifier",
    "dashboard.tutor.earnings.nextPayment": "Prochain paiement",
    
    // Profile management
    "dashboard.tutor.profile.publicProfile": "Profil public",
    "dashboard.tutor.profile.editPublicProfile": "Modifier le profil public",
    "dashboard.tutor.profile.accountSettings": "Paramètres du compte",
    "dashboard.tutor.profile.availability": "Disponibilités",
    "dashboard.tutor.profile.availabilityDescription": "Gérer vos créneaux disponibles",
    "dashboard.tutor.profile.configure": "Configurer",
    "dashboard.tutor.profile.rates": "Tarifs",
    "dashboard.tutor.profile.ratesDescription": "Définir vos prix par matière",
    "dashboard.tutor.profile.documents": "Documents",
    "dashboard.tutor.profile.documentsDescription": "Diplômes et certifications",
    "dashboard.tutor.profile.manage": "Gérer",
  },
  
  en: {
    // Tutor Dashboard
    "dashboard.tutor.title": "Tutor Dashboard",
    "dashboard.tutor.welcome": "Welcome,",
    "dashboard.tutor.notifications": "Notifications",
    "dashboard.tutor.settings": "Settings",
    
    // Tabs
    "dashboard.tutor.tabs.overview": "Overview",
    "dashboard.tutor.tabs.schedule": "Schedule",
    "dashboard.tutor.tabs.students": "Students",
    "dashboard.tutor.tabs.earnings": "Earnings",
    "dashboard.tutor.tabs.profile": "Profile",
    
    // Overview stats
    "dashboard.tutor.stats.lessonsThisMonth": "Lessons this month",
    "dashboard.tutor.stats.activeStudents": "Active students",
    "dashboard.tutor.stats.averageRating": "Average rating",
    "dashboard.tutor.stats.earningsThisMonth": "Earnings this month",
    "dashboard.tutor.stats.lessonsCompare": "compared to last month",
    "dashboard.tutor.stats.newStudents": "new this month",
    "dashboard.tutor.stats.basedOnReviews": "Based on",
    "dashboard.tutor.stats.reviews": "reviews",
    "dashboard.tutor.stats.vsLastMonth": "vs last month",
    
    // Profile status
    "dashboard.tutor.profileStatus.title": "Profile status",
    "dashboard.tutor.profileStatus.verified": "Profile verified",
    "dashboard.tutor.profileStatus.description": "Your profile is complete and verified",
    "dashboard.tutor.profileStatus.badge": "Verified",
    
    // Upcoming lessons
    "dashboard.tutor.upcomingLessons.title": "Upcoming lessons",
    "dashboard.tutor.upcomingLessons.with": "with",
    "dashboard.tutor.upcomingLessons.confirmed": "Confirmed",
    "dashboard.tutor.upcomingLessons.pending": "Pending",
    "dashboard.tutor.upcomingLessons.start": "Start",
    
    // Schedule
    "dashboard.tutor.schedule.title": "Schedule management",
    "dashboard.tutor.schedule.description": "Manage your availability and time slots",
    "dashboard.tutor.schedule.calendar": "Interactive calendar",
    "dashboard.tutor.schedule.calendarDescription": "Manage your availability and view your lessons",
    "dashboard.tutor.schedule.openCalendar": "Open calendar",
    
    // Students
    "dashboard.tutor.students.title": "My students",
    "dashboard.tutor.students.description": "Track your students' progress",
    "dashboard.tutor.students.lessons": "lessons",
    "dashboard.tutor.students.lastLesson": "Last lesson:",
    "dashboard.tutor.students.progress": "Progress",
    
    // Earnings
    "dashboard.tutor.earnings.title": "Earnings",
    "dashboard.tutor.earnings.thisMonth": "This month",
    "dashboard.tutor.earnings.lastMonth": "Last month",
    "dashboard.tutor.earnings.pending": "Pending",
    "dashboard.tutor.earnings.totalEarned": "Total earned",
    "dashboard.tutor.earnings.payments": "Payments",
    "dashboard.tutor.earnings.paymentMethod": "Payment method",
    "dashboard.tutor.earnings.bankTransfer": "Bank transfer",
    "dashboard.tutor.earnings.modify": "Modify",
    "dashboard.tutor.earnings.nextPayment": "Next payment",
    
    // Profile management
    "dashboard.tutor.profile.publicProfile": "Public profile",
    "dashboard.tutor.profile.editPublicProfile": "Edit public profile",
    "dashboard.tutor.profile.accountSettings": "Account settings",
    "dashboard.tutor.profile.availability": "Availability",
    "dashboard.tutor.profile.availabilityDescription": "Manage your available time slots",
    "dashboard.tutor.profile.configure": "Configure",
    "dashboard.tutor.profile.rates": "Rates",
    "dashboard.tutor.profile.ratesDescription": "Set your prices per subject",
    "dashboard.tutor.profile.documents": "Documents",
    "dashboard.tutor.profile.documentsDescription": "Diplomas and certifications",
    "dashboard.tutor.profile.manage": "Manage",
  },
  
  es: {
    // Tutor Dashboard
    "dashboard.tutor.title": "Panel del Tutor",
    "dashboard.tutor.welcome": "Bienvenido,",
    "dashboard.tutor.notifications": "Notificaciones",
    "dashboard.tutor.settings": "Configuración",
    
    // Tabs
    "dashboard.tutor.tabs.overview": "Resumen",
    "dashboard.tutor.tabs.schedule": "Horario",
    "dashboard.tutor.tabs.students": "Estudiantes",
    "dashboard.tutor.tabs.earnings": "Ingresos",
    "dashboard.tutor.tabs.profile": "Perfil",
    
    // Overview stats
    "dashboard.tutor.stats.lessonsThisMonth": "Clases este mes",
    "dashboard.tutor.stats.activeStudents": "Estudiantes activos",
    "dashboard.tutor.stats.averageRating": "Calificación promedio",
    "dashboard.tutor.stats.earningsThisMonth": "Ingresos este mes",
    "dashboard.tutor.stats.lessonsCompare": "comparado con el mes pasado",
    "dashboard.tutor.stats.newStudents": "nuevos este mes",
    "dashboard.tutor.stats.basedOnReviews": "Basado en",
    "dashboard.tutor.stats.reviews": "reseñas",
    "dashboard.tutor.stats.vsLastMonth": "vs mes pasado",
    
    // Profile status
    "dashboard.tutor.profileStatus.title": "Estado del perfil",
    "dashboard.tutor.profileStatus.verified": "Perfil verificado",
    "dashboard.tutor.profileStatus.description": "Tu perfil está completo y verificado",
    "dashboard.tutor.profileStatus.badge": "Verificado",
    
    // Upcoming lessons
    "dashboard.tutor.upcomingLessons.title": "Próximas clases",
    "dashboard.tutor.upcomingLessons.with": "con",
    "dashboard.tutor.upcomingLessons.confirmed": "Confirmado",
    "dashboard.tutor.upcomingLessons.pending": "Pendiente",
    "dashboard.tutor.upcomingLessons.start": "Iniciar",
    
    // Schedule
    "dashboard.tutor.schedule.title": "Gestión de horarios",
    "dashboard.tutor.schedule.description": "Gestiona tu disponibilidad y franjas horarias",
    "dashboard.tutor.schedule.calendar": "Calendario interactivo",
    "dashboard.tutor.schedule.calendarDescription": "Gestiona tu disponibilidad y visualiza tus clases",
    "dashboard.tutor.schedule.openCalendar": "Abrir calendario",
    
    // Students
    "dashboard.tutor.students.title": "Mis estudiantes",
    "dashboard.tutor.students.description": "Sigue el progreso de tus estudiantes",
    "dashboard.tutor.students.lessons": "clases",
    "dashboard.tutor.students.lastLesson": "Última clase:",
    "dashboard.tutor.students.progress": "Progreso",
    
    // Earnings
    "dashboard.tutor.earnings.title": "Ingresos",
    "dashboard.tutor.earnings.thisMonth": "Este mes",
    "dashboard.tutor.earnings.lastMonth": "Mes pasado",
    "dashboard.tutor.earnings.pending": "Pendiente",
    "dashboard.tutor.earnings.totalEarned": "Total ganado",
    "dashboard.tutor.earnings.payments": "Pagos",
    "dashboard.tutor.earnings.paymentMethod": "Método de pago",
    "dashboard.tutor.earnings.bankTransfer": "Transferencia bancaria",
    "dashboard.tutor.earnings.modify": "Modificar",
    "dashboard.tutor.earnings.nextPayment": "Próximo pago",
    
    // Profile management
    "dashboard.tutor.profile.publicProfile": "Perfil público",
    "dashboard.tutor.profile.editPublicProfile": "Editar perfil público",
    "dashboard.tutor.profile.accountSettings": "Configuración de cuenta",
    "dashboard.tutor.profile.availability": "Disponibilidad",
    "dashboard.tutor.profile.availabilityDescription": "Gestiona tus horarios disponibles",
    "dashboard.tutor.profile.configure": "Configurar",
    "dashboard.tutor.profile.rates": "Tarifas",
    "dashboard.tutor.profile.ratesDescription": "Define tus precios por materia",
    "dashboard.tutor.profile.documents": "Documentos",
    "dashboard.tutor.profile.documentsDescription": "Diplomas y certificaciones",
    "dashboard.tutor.profile.manage": "Gestionar",
  }
};

function addTranslations() {
  const i18nPath = path.join(__dirname, '..', 'lib', 'i18n.ts');
  
  try {
    // Lire le fichier
    let content = fs.readFileSync(i18nPath, 'utf8');
    
    // Pour chaque langue, ajouter les traductions
    Object.keys(newTranslations).forEach(lang => {
      const translations = newTranslations[lang];
      
      // Construire le texte des nouvelles traductions
      const translationsText = Object.entries(translations)
        .map(([key, value]) => `    "${key}": "${value}",`)
        .join('\n');
      
      // Trouver la position d'insertion pour cette langue
      const langSectionRegex = new RegExp(`(${lang}:\\s*{[\\s\\S]*?)"([^"]*\\.available)":\\s*"[^"]*",`, 'g');
      const match = langSectionRegex.exec(content);
      
      if (match) {
        const insertPosition = match.index + match[0].length;
        content = content.slice(0, insertPosition) + '\n\n' + translationsText + content.slice(insertPosition);
      }
    });
    
    // Écrire le fichier modifié
    fs.writeFileSync(i18nPath, content);
    console.log('✅ Traductions du dashboard tuteur ajoutées avec succès!');
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout des traductions:', error.message);
  }
}

if (require.main === module) {
  addTranslations();
}

module.exports = { addTranslations };

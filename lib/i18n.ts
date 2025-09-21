export const defaultLocale = "fr" as const
export const locales = ["fr", "en", "es"] as const

export type Locale = (typeof locales)[number]

export const translations = {
  fr: {
    // Navigation
    "nav.subjects": "Matières",
    "nav.findTutor": "Trouver un Tuteur",
    "nav.becomeTutor": "Devenir Tuteur",
    "nav.login": "Connexion",
    "nav.register": "S'inscrire",
    "nav.openMenu": "Ouvrir le menu",
    "nav.allSubjects": "Toutes les matières",
    "nav.subjectsDescription": "Mathématiques, Sciences, Langues, Histoire et plus encore",
    "nav.mathDescription": "Algèbre, Géométrie, Calcul",
    "nav.sciencesDescription": "Physique, Chimie, Biologie",
    "nav.languagesDescription": "Français, Anglais, Espagnol",

    // Homepage
    "home.hero.title": "Trouvez le tuteur parfait pour réussir",
    "home.hero.subtitle": "Connectez-vous avec des tuteurs qualifiés pour un apprentissage personnalisé en ligne",
    "home.hero.cta": "Commencer maintenant",
    "home.hero.findTutor": "Trouver un tuteur",
    "home.hero.becomeTutor": "Devenir Tuteur",
    "home.hero.badge": "Plateforme #1 en France",

    // Subjects
    "subjects.mathematics": "Mathématiques",
    "subjects.sciences": "Sciences",
    "subjects.languages": "Langues",
    "subjects.history": "Histoire",
    "subjects.geography": "Géographie",
    "subjects.philosophy": "Philosophie",
    "subjects.economics": "Économie",
    "subjects.computer": "Informatique",

    // Common
    "common.loading": "Chargement...",
    "common.error": "Une erreur est survenue",
    "common.success": "Succès",
    "common.cancel": "Annuler",
    "common.save": "Enregistrer",
    "common.edit": "Modifier",
    "common.delete": "Supprimer",
    "common.search": "Rechercher",
    "common.quickSearch": "Recherche rapide",
    "common.searchPlaceholder": "Quelle matière recherchez-vous ?",

    // Features
    "features.title": "Pourquoi choisir TutorApp ?",
    "features.subtitle": "Une plateforme conçue pour offrir la meilleure expérience d'apprentissage en ligne",
    "features.qualifiedTutors": "Tuteurs Qualifiés",
    "features.qualifiedTutorsDesc": "Tous nos tuteurs sont vérifiés et possèdent les qualifications nécessaires",
    "features.flexibleSchedule": "Horaires Flexibles",
    "features.flexibleScheduleDesc": "Réservez vos cours quand vous voulez, 24h/24 et 7j/7",
    "features.securePayment": "Paiement Sécurisé",
    "features.securePaymentDesc": "Transactions sécurisées avec notre système de paiement intégré",
    "features.personalizedLearning": "Apprentissage Personnalisé",
    "features.personalizedLearningDesc": "Des cours adaptés à votre niveau et à vos objectifs",
    "features.onlineClasses": "Cours en Ligne",
    "features.onlineClassesDesc": "Salle de classe virtuelle avec outils interactifs intégrés",

    // Stats
    "stats.satisfiedStudents": "Étudiants satisfaits",
    "stats.qualifiedTutors": "Tuteurs qualifiés",
    "stats.availableSubjects": "Matières disponibles",
    "stats.averageRating": "Note moyenne",

    // CTA
    "cta.title": "Prêt à commencer votre parcours d'apprentissage ?",
    "cta.subtitle": "Rejoignez des milliers d'étudiants qui ont déjà transformé leur réussite scolaire avec TutorApp",
    "cta.startFree": "Commencer Gratuitement",
    "cta.seeDemo": "Voir une Démo",

    // Footer
    "footer.description":
      "TutorApp - La plateforme de tutorat en ligne qui connecte étudiants et tuteurs qualifiés pour un apprentissage personnalisé et efficace.",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés.",
    "footer.privacy": "Confidentialité",
    "footer.terms": "Conditions",
    "footer.cookies": "Cookies",
    "footer.pricing": "Tarifs",
    "footer.helpCenter": "Centre d'aide",
    "footer.faq": "FAQ",
    "footer.safety": "Sécurité",

    // Auth pages
    "auth.login.title": "Connexion",
    "auth.login.subtitle": "Accédez à votre compte TutorApp",
    "auth.login.cardTitle": "Se connecter",
    "auth.login.cardDescription": "Entrez vos identifiants pour accéder à votre compte",
    "auth.login.noAccount": "Pas encore de compte ?",
    "auth.login.createAccount": "Créer un compte",
    "auth.register.title": "Inscription",
    "auth.register.subtitle": "Créez votre compte TutorApp",
    "auth.register.cardTitle": "Créer un compte",
    "auth.register.cardDescription": "Rejoignez notre communauté d'apprentissage",
    "auth.register.hasAccount": "Déjà un compte ?",
    "auth.register.signIn": "Se connecter",

    // Become Tutor page
    "becomeTutor.badge": "Rejoignez notre équipe",
    "becomeTutor.title": "Devenez tuteur et",
    "becomeTutor.titleHighlight": "partagez vos connaissances",
    "becomeTutor.subtitle": "Enseignez ce que vous aimez, aidez les étudiants à réussir et gagnez jusqu'à 50€/heure avec des horaires flexibles.",
    "becomeTutor.flexibleSchedule": "Horaires flexibles",
    "becomeTutor.attractiveIncome": "Revenus attractifs",
    "becomeTutor.dedicatedSupport": "Support dédié",
    "becomeTutor.globalCommunity": "Communauté mondiale",
    "becomeTutor.applyNow": "Postuler maintenant",
    "becomeTutor.setRates": "Fixez vos tarifs selon votre expérience",
    "becomeTutor.activeTutors": "Tuteurs actifs sur la plateforme",
    "becomeTutor.chooseSchedule": "Choisissez vos créneaux selon votre disponibilité",
    
    // Requirements section
    "becomeTutor.requirements.title": "Critères pour devenir tuteur",
    "becomeTutor.requirements.subtitle": "Nous recherchons des tuteurs passionnés et qualifiés",
    "becomeTutor.requirements.academic": "Qualifications académiques",
    "becomeTutor.requirements.bacPlus3": "Bac+3 minimum ou équivalent",
    "becomeTutor.requirements.expertise": "Expertise dans votre domaine",
    "becomeTutor.requirements.teaching": "Expérience pédagogique appréciée",
    "becomeTutor.requirements.technical": "Compétences techniques",
    "becomeTutor.requirements.internet": "Connexion internet stable",
    "becomeTutor.requirements.webcam": "Webcam et micro de qualité",
    "becomeTutor.requirements.digital": "Maîtrise des outils numériques",
    "becomeTutor.requirements.verification": "Vérifications",
    "becomeTutor.requirements.identity": "Vérification d'identité",
    "becomeTutor.requirements.diploma": "Vérification des diplômes",
    "becomeTutor.requirements.interview": "Entretien de validation",
    
    // Application form
    "becomeTutor.form.title": "Postulez maintenant",
    "becomeTutor.form.subtitle": "Remplissez ce formulaire pour commencer votre parcours de tuteur",
    "becomeTutor.form.personalInfo": "Informations personnelles",
    "becomeTutor.form.personalInfoDesc": "Ces informations nous aideront à mieux vous connaître",
    "becomeTutor.form.firstName": "Prénom",
    "becomeTutor.form.lastName": "Nom",
    "becomeTutor.form.email": "Email",
    "becomeTutor.form.phone": "Téléphone",
    "becomeTutor.form.bio": "Présentation personnelle",
    "becomeTutor.form.bioPlaceholder": "Parlez-nous de vous, votre parcours, votre passion pour l'enseignement...",
    "becomeTutor.form.subjects": "Matières que vous souhaitez enseigner",
    "becomeTutor.form.education": "Niveau d'études",
    "becomeTutor.form.educationPlaceholder": "Sélectionnez votre niveau",
    "becomeTutor.form.experience": "Expérience d'enseignement",
    "becomeTutor.form.experiencePlaceholder": "Votre expérience",
    "becomeTutor.form.hourlyRate": "Tarif horaire souhaité (€)",
    "becomeTutor.form.rateRecommendation": "Tarif recommandé : 20-35€/h selon votre expérience",
    "becomeTutor.form.documents": "Documents à fournir",
    "becomeTutor.form.idCard": "Pièce d'identité",
    "becomeTutor.form.diplomas": "Diplômes",
    "becomeTutor.form.upload": "Télécharger",
    "becomeTutor.form.acceptTerms": "J'accepte les",
    "becomeTutor.form.terms": "conditions d'utilisation",
    "becomeTutor.form.and": "et la",
    "becomeTutor.form.privacy": "politique de confidentialité",
    "becomeTutor.form.newsletter": "Je souhaite recevoir des informations sur les opportunités d'enseignement",
    "becomeTutor.form.submit": "Soumettre ma candidature",
    
    // Process section
    "becomeTutor.process.title": "Processus de sélection",
    "becomeTutor.process.subtitle": "Un processus simple et transparent en 4 étapes",
    "becomeTutor.process.step1": "Candidature",
    "becomeTutor.process.step1Desc": "Remplissez le formulaire et téléchargez vos documents",
    "becomeTutor.process.step2": "Vérification",
    "becomeTutor.process.step2Desc": "Nous vérifions vos qualifications et documents (2-3 jours)",
    "becomeTutor.process.step3": "Entretien",
    "becomeTutor.process.step3Desc": "Entretien vidéo de 30 minutes pour valider votre profil",
    "becomeTutor.process.step4": "Activation",
    "becomeTutor.process.step4Desc": "Votre profil est activé et vous pouvez commencer à enseigner",
    
    // FAQ section
    "becomeTutor.faq.title": "Questions fréquentes",
    "becomeTutor.faq.earning.question": "Combien puis-je gagner en tant que tuteur ?",
    "becomeTutor.faq.earning.answer": "Nos tuteurs gagnent entre 15€ et 50€ par heure selon leur expérience et leurs qualifications. La plateforme prélève une commission de 15% sur chaque cours.",
    "becomeTutor.faq.validation.question": "Combien de temps prend le processus de validation ?",
    "becomeTutor.faq.validation.answer": "Le processus complet prend généralement 5-7 jours ouvrés, incluant la vérification des documents et l'entretien de validation.",
    "becomeTutor.faq.multiple.question": "Puis-je enseigner plusieurs matières ?",
    "becomeTutor.faq.multiple.answer": "Oui, vous pouvez enseigner plusieurs matières si vous avez les qualifications nécessaires pour chacune d'entre elles.",
    "becomeTutor.faq.payment.question": "Comment fonctionne le paiement ?",
    "becomeTutor.faq.payment.answer": "Les paiements sont effectués automatiquement 48h après chaque cours via virement bancaire ou PayPal selon votre préférence.",
    
    // Form options
    "becomeTutor.form.bachelor": "Bac+3 (Licence)",
    "becomeTutor.form.master": "Bac+5 (Master)",
    "becomeTutor.form.phd": "Bac+8 (Doctorat)",
    "becomeTutor.form.other": "Autre",
    "becomeTutor.form.noExperience": "Aucune expérience",
    "becomeTutor.form.oneToTwo": "1-2 ans",
    "becomeTutor.form.threeToFive": "3-5 ans",
    "becomeTutor.form.fivePlus": "Plus de 5 ans",

    // Tutors page
    "tutors.title": "Trouvez votre tuteur idéal",
    "tutors.subtitle": "Découvrez des tuteurs qualifiés et expérimentés dans toutes les matières",
    "tutors.searchPlaceholder": "Rechercher par matière ou nom...",
    "tutors.filter": "Filtrer",
    "tutors.allSubjects": "Toutes les matières",
    "tutors.allLevels": "Tous les niveaux",
    "tutors.hourlyRate": "/heure",
    "tutors.viewProfile": "Voir le profil",
    "tutors.bookNow": "Réserver maintenant",

    // Forgot Password page
    "forgotPassword.title": "Mot de passe oublié",
    "forgotPassword.subtitle": "Entrez votre email pour recevoir un lien de réinitialisation",
    "forgotPassword.cardTitle": "Réinitialiser le mot de passe",
    "forgotPassword.cardDescription": "Nous vous enverrons un lien pour créer un nouveau mot de passe",
    "forgotPassword.sendLink": "Envoyer le lien",
    "forgotPassword.backToLogin": "Retour à la connexion",
    "forgotPassword.rememberPassword": "Vous vous souvenez de votre mot de passe ?",

    // Subjects page
    "subjects.title": "Explorez toutes nos matières",
    "subjects.subtitle": "Trouvez le tuteur parfait pour la matière qui vous intéresse",
    "subjects.tutorsAvailable": "tuteurs disponibles",
    "subjects.startingFrom": "À partir de",
    "subjects.viewTutors": "Voir les tuteurs",
  },
  en: {
    // Navigation
    "nav.subjects": "Subjects",
    "nav.findTutor": "Find a Tutor",
    "nav.becomeTutor": "Become a Tutor",
    "nav.login": "Login",
    "nav.register": "Sign Up",
    "nav.openMenu": "Open menu",
    "nav.allSubjects": "All subjects",
    "nav.subjectsDescription": "Mathematics, Sciences, Languages, History and more",
    "nav.mathDescription": "Algebra, Geometry, Calculus",
    "nav.sciencesDescription": "Physics, Chemistry, Biology",
    "nav.languagesDescription": "French, English, Spanish",

    // Homepage
    "home.hero.title": "Find the perfect tutor to succeed",
    "home.hero.subtitle": "Connect with qualified tutors for personalized online learning",
    "home.hero.cta": "Get started now",
    "home.hero.findTutor": "Find a tutor",
    "home.hero.becomeTutor": "Become a Tutor",
    "home.hero.badge": "#1 Platform in France",

    // Subjects
    "subjects.mathematics": "Mathematics",
    "subjects.sciences": "Sciences",
    "subjects.languages": "Languages",
    "subjects.history": "History",
    "subjects.geography": "Geography",
    "subjects.philosophy": "Philosophy",
    "subjects.economics": "Economics",
    "subjects.computer": "Computer Science",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.success": "Success",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",
    "common.search": "Search",
    "common.quickSearch": "Quick search",
    "common.searchPlaceholder": "What subject are you looking for?",

    // Features
    "features.title": "Why choose TutorApp?",
    "features.subtitle": "A platform designed to provide the best online learning experience",
    "features.qualifiedTutors": "Qualified Tutors",
    "features.qualifiedTutorsDesc": "All our tutors are verified and have the necessary qualifications",
    "features.flexibleSchedule": "Flexible Schedule",
    "features.flexibleScheduleDesc": "Book your lessons whenever you want, 24/7",
    "features.securePayment": "Secure Payment",
    "features.securePaymentDesc": "Secure transactions with our integrated payment system",
    "features.personalizedLearning": "Personalized Learning",
    "features.personalizedLearningDesc": "Courses adapted to your level and goals",
    "features.onlineClasses": "Online Classes",
    "features.onlineClassesDesc": "Virtual classroom with integrated interactive tools",

    // Stats
    "stats.satisfiedStudents": "Satisfied students",
    "stats.qualifiedTutors": "Qualified tutors",
    "stats.availableSubjects": "Available subjects",
    "stats.averageRating": "Average rating",

    // CTA
    "cta.title": "Ready to start your learning journey?",
    "cta.subtitle": "Join thousands of students who have already transformed their academic success with TutorApp",
    "cta.startFree": "Start for Free",
    "cta.seeDemo": "See Demo",

    // Footer
    "footer.description":
      "TutorApp - The online tutoring platform that connects students and qualified tutors for personalized and effective learning.",
    "footer.services": "Services",
    "footer.support": "Support",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.cookies": "Cookies",
    "footer.pricing": "Pricing",
    "footer.helpCenter": "Help Center",
    "footer.faq": "FAQ",
    "footer.safety": "Safety",

    // Auth pages
    "auth.login.title": "Login",
    "auth.login.subtitle": "Access your TutorApp account",
    "auth.login.cardTitle": "Sign in",
    "auth.login.cardDescription": "Enter your credentials to access your account",
    "auth.login.noAccount": "Don't have an account?",
    "auth.login.createAccount": "Create account",
    "auth.register.title": "Sign Up",
    "auth.register.subtitle": "Create your TutorApp account",
    "auth.register.cardTitle": "Create account",
    "auth.register.cardDescription": "Join our learning community",
    "auth.register.hasAccount": "Already have an account?",
    "auth.register.signIn": "Sign in",

    // Become Tutor page
    "becomeTutor.badge": "Join our team",
    "becomeTutor.title": "Become a tutor and",
    "becomeTutor.titleHighlight": "share your knowledge",
    "becomeTutor.subtitle": "Teach what you love, help students succeed and earn up to €50/hour with flexible schedules.",
    "becomeTutor.flexibleSchedule": "Flexible schedule",
    "becomeTutor.attractiveIncome": "Attractive income",
    "becomeTutor.dedicatedSupport": "Dedicated support",
    "becomeTutor.globalCommunity": "Global community",
    "becomeTutor.applyNow": "Apply now",
    "becomeTutor.setRates": "Set your rates according to your experience",
    "becomeTutor.activeTutors": "Active tutors on the platform",
    "becomeTutor.chooseSchedule": "Choose your slots according to your availability",
    
    // Requirements section
    "becomeTutor.requirements.title": "Requirements to become a tutor",
    "becomeTutor.requirements.subtitle": "We are looking for passionate and qualified tutors",
    "becomeTutor.requirements.academic": "Academic qualifications",
    "becomeTutor.requirements.bacPlus3": "Bachelor's degree minimum or equivalent",
    "becomeTutor.requirements.expertise": "Expertise in your field",
    "becomeTutor.requirements.teaching": "Teaching experience appreciated",
    "becomeTutor.requirements.technical": "Technical skills",
    "becomeTutor.requirements.internet": "Stable internet connection",
    "becomeTutor.requirements.webcam": "Quality webcam and microphone",
    "becomeTutor.requirements.digital": "Mastery of digital tools",
    "becomeTutor.requirements.verification": "Verifications",
    "becomeTutor.requirements.identity": "Identity verification",
    "becomeTutor.requirements.diploma": "Diploma verification",
    "becomeTutor.requirements.interview": "Validation interview",
    
    // Application form
    "becomeTutor.form.title": "Apply now",
    "becomeTutor.form.subtitle": "Fill out this form to start your tutor journey",
    "becomeTutor.form.personalInfo": "Personal information",
    "becomeTutor.form.personalInfoDesc": "This information will help us get to know you better",
    "becomeTutor.form.firstName": "First name",
    "becomeTutor.form.lastName": "Last name",
    "becomeTutor.form.email": "Email",
    "becomeTutor.form.phone": "Phone",
    "becomeTutor.form.bio": "Personal presentation",
    "becomeTutor.form.bioPlaceholder": "Tell us about yourself, your background, your passion for teaching...",
    "becomeTutor.form.subjects": "Subjects you want to teach",
    "becomeTutor.form.education": "Education level",
    "becomeTutor.form.educationPlaceholder": "Select your level",
    "becomeTutor.form.experience": "Teaching experience",
    "becomeTutor.form.experiencePlaceholder": "Your experience",
    "becomeTutor.form.hourlyRate": "Desired hourly rate (€)",
    "becomeTutor.form.rateRecommendation": "Recommended rate: 20-35€/h according to your experience",
    "becomeTutor.form.documents": "Documents to provide",
    "becomeTutor.form.idCard": "ID card",
    "becomeTutor.form.diplomas": "Diplomas",
    "becomeTutor.form.upload": "Upload",
    "becomeTutor.form.acceptTerms": "I accept the",
    "becomeTutor.form.terms": "terms of use",
    "becomeTutor.form.and": "and the",
    "becomeTutor.form.privacy": "privacy policy",
    "becomeTutor.form.newsletter": "I want to receive information about teaching opportunities",
    "becomeTutor.form.submit": "Submit my application",
    
    // Process section
    "becomeTutor.process.title": "Selection process",
    "becomeTutor.process.subtitle": "A simple and transparent 4-step process",
    "becomeTutor.process.step1": "Application",
    "becomeTutor.process.step1Desc": "Fill out the form and upload your documents",
    "becomeTutor.process.step2": "Verification",
    "becomeTutor.process.step2Desc": "We verify your qualifications and documents (2-3 days)",
    "becomeTutor.process.step3": "Interview",
    "becomeTutor.process.step3Desc": "30-minute video interview to validate your profile",
    "becomeTutor.process.step4": "Activation",
    "becomeTutor.process.step4Desc": "Your profile is activated and you can start teaching",
    
    // FAQ section
    "becomeTutor.faq.title": "Frequently asked questions",
    "becomeTutor.faq.earning.question": "How much can I earn as a tutor?",
    "becomeTutor.faq.earning.answer": "Our tutors earn between €15 and €50 per hour depending on their experience and qualifications. The platform takes a 15% commission on each lesson.",
    "becomeTutor.faq.validation.question": "How long does the validation process take?",
    "becomeTutor.faq.validation.answer": "The complete process generally takes 5-7 business days, including document verification and validation interview.",
    "becomeTutor.faq.multiple.question": "Can I teach multiple subjects?",
    "becomeTutor.faq.multiple.answer": "Yes, you can teach multiple subjects if you have the necessary qualifications for each of them.",
    "becomeTutor.faq.payment.question": "How does payment work?",
    "becomeTutor.faq.payment.answer": "Payments are made automatically 48 hours after each lesson via bank transfer or PayPal according to your preference.",
    
    // Form options
    "becomeTutor.form.bachelor": "Bachelor's degree",
    "becomeTutor.form.master": "Master's degree",
    "becomeTutor.form.phd": "PhD",
    "becomeTutor.form.other": "Other",
    "becomeTutor.form.noExperience": "No experience",
    "becomeTutor.form.oneToTwo": "1-2 years",
    "becomeTutor.form.threeToFive": "3-5 years",
    "becomeTutor.form.fivePlus": "More than 5 years",

    // Tutors page
    "tutors.title": "Find your ideal tutor",
    "tutors.subtitle": "Discover qualified and experienced tutors in all subjects",
    "tutors.searchPlaceholder": "Search by subject or name...",
    "tutors.filter": "Filter",
    "tutors.allSubjects": "All subjects",
    "tutors.allLevels": "All levels",
    "tutors.hourlyRate": "/hour",
    "tutors.viewProfile": "View profile",
    "tutors.bookNow": "Book now",

    // Forgot Password page
    "forgotPassword.title": "Forgot Password",
    "forgotPassword.subtitle": "Enter your email to receive a reset link",
    "forgotPassword.cardTitle": "Reset password",
    "forgotPassword.cardDescription": "We'll send you a link to create a new password",
    "forgotPassword.sendLink": "Send link",
    "forgotPassword.backToLogin": "Back to login",
    "forgotPassword.rememberPassword": "Remember your password?",

    // Subjects page
    "subjects.title": "Explore all our subjects",
    "subjects.subtitle": "Find the perfect tutor for the subject you're interested in",
    "subjects.tutorsAvailable": "tutors available",
    "subjects.startingFrom": "Starting from",
    "subjects.viewTutors": "View tutors",
  },
  es: {
    // Navigation
    "nav.subjects": "Materias",
    "nav.findTutor": "Encontrar Tutor",
    "nav.becomeTutor": "Ser Tutor",
    "nav.login": "Iniciar Sesión",
    "nav.register": "Registrarse",
    "nav.openMenu": "Abrir menú",
    "nav.allSubjects": "Todas las materias",
    "nav.subjectsDescription": "Matemáticas, Ciencias, Idiomas, Historia y más",
    "nav.mathDescription": "Álgebra, Geometría, Cálculo",
    "nav.sciencesDescription": "Física, Química, Biología",
    "nav.languagesDescription": "Francés, Inglés, Español",

    // Homepage
    "home.hero.title": "Encuentra el tutor perfecto para triunfar",
    "home.hero.subtitle": "Conéctate con tutores calificados para un aprendizaje personalizado en línea",
    "home.hero.cta": "Comenzar ahora",
    "home.hero.findTutor": "Encontrar tutor",
    "home.hero.becomeTutor": "Ser Tutor",
    "home.hero.badge": "Plataforma #1 en Francia",

    // Subjects
    "subjects.mathematics": "Matemáticas",
    "subjects.sciences": "Ciencias",
    "subjects.languages": "Idiomas",
    "subjects.history": "Historia",
    "subjects.geography": "Geografía",
    "subjects.philosophy": "Filosofía",
    "subjects.economics": "Economía",
    "subjects.computer": "Informática",

    // Common
    "common.loading": "Cargando...",
    "common.error": "Ocurrió un error",
    "common.success": "Éxito",
    "common.cancel": "Cancelar",
    "common.save": "Guardar",
    "common.edit": "Editar",
    "common.delete": "Eliminar",
    "common.search": "Buscar",
    "common.quickSearch": "Búsqueda rápida",
    "common.searchPlaceholder": "¿Qué materia estás buscando?",

    // Features
    "features.title": "¿Por qué elegir TutorApp?",
    "features.subtitle": "Una plataforma diseñada para ofrecer la mejor experiencia de aprendizaje en línea",
    "features.qualifiedTutors": "Tutores Calificados",
    "features.qualifiedTutorsDesc": "Todos nuestros tutores están verificados y tienen las calificaciones necesarias",
    "features.flexibleSchedule": "Horarios Flexibles",
    "features.flexibleScheduleDesc": "Reserva tus clases cuando quieras, 24/7",
    "features.securePayment": "Pago Seguro",
    "features.securePaymentDesc": "Transacciones seguras con nuestro sistema de pago integrado",
    "features.personalizedLearning": "Aprendizaje Personalizado",
    "features.personalizedLearningDesc": "Cursos adaptados a tu nivel y objetivos",
    "features.onlineClasses": "Clases en Línea",
    "features.onlineClassesDesc": "Aula virtual con herramientas interactivas integradas",

    // Stats
    "stats.satisfiedStudents": "Estudiantes satisfechos",
    "stats.qualifiedTutors": "Tutores calificados",
    "stats.availableSubjects": "Materias disponibles",
    "stats.averageRating": "Calificación promedio",

    // CTA
    "cta.title": "¿Listo para comenzar tu viaje de aprendizaje?",
    "cta.subtitle": "Únete a miles de estudiantes que ya han transformado su éxito académico con TutorApp",
    "cta.startFree": "Comenzar Gratis",
    "cta.seeDemo": "Ver Demo",

    // Footer
    "footer.description":
      "TutorApp - La plataforma de tutoría en línea que conecta estudiantes y tutores calificados para un aprendizaje personalizado y efectivo.",
    "footer.services": "Servicios",
    "footer.support": "Soporte",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.cookies": "Cookies",
    "footer.pricing": "Precios",
    "footer.helpCenter": "Centro de Ayuda",
    "footer.faq": "FAQ",
    "footer.safety": "Seguridad",

    // Auth pages
    "auth.login.title": "Iniciar Sesión",
    "auth.login.subtitle": "Accede a tu cuenta de TutorApp",
    "auth.login.cardTitle": "Iniciar sesión",
    "auth.login.cardDescription": "Ingresa tus credenciales para acceder a tu cuenta",
    "auth.login.noAccount": "¿No tienes cuenta?",
    "auth.login.createAccount": "Crear cuenta",
    "auth.register.title": "Registrarse",
    "auth.register.subtitle": "Crea tu cuenta de TutorApp",
    "auth.register.cardTitle": "Crear cuenta",
    "auth.register.cardDescription": "Únete a nuestra comunidad de aprendizaje",
    "auth.register.hasAccount": "¿Ya tienes cuenta?",
    "auth.register.signIn": "Iniciar sesión",

    // Become Tutor page
    "becomeTutor.badge": "Únete a nuestro equipo",
    "becomeTutor.title": "Convértete en tutor y",
    "becomeTutor.titleHighlight": "comparte tu conocimiento",
    "becomeTutor.subtitle": "Enseña lo que amas, ayuda a los estudiantes a tener éxito y gana hasta 50€/hora con horarios flexibles.",
    "becomeTutor.flexibleSchedule": "Horarios flexibles",
    "becomeTutor.attractiveIncome": "Ingresos atractivos",
    "becomeTutor.dedicatedSupport": "Soporte dedicado",
    "becomeTutor.globalCommunity": "Comunidad global",

    // Tutors page
    "tutors.title": "Encuentra tu tutor ideal",
    "tutors.subtitle": "Descubre tutores calificados y experimentados en todas las materias",
    "tutors.searchPlaceholder": "Buscar por materia o nombre...",
    "tutors.filter": "Filtrar",
    "tutors.allSubjects": "Todas las materias",
    "tutors.allLevels": "Todos los niveles",
    "tutors.hourlyRate": "/hora",
    "tutors.viewProfile": "Ver perfil",
    "tutors.bookNow": "Reservar ahora",

    // Forgot Password page
    "forgotPassword.title": "Contraseña Olvidada",
    "forgotPassword.subtitle": "Ingresa tu email para recibir un enlace de restablecimiento",
    "forgotPassword.cardTitle": "Restablecer contraseña",
    "forgotPassword.cardDescription": "Te enviaremos un enlace para crear una nueva contraseña",
    "forgotPassword.sendLink": "Enviar enlace",
    "forgotPassword.backToLogin": "Volver al inicio de sesión",
    "forgotPassword.rememberPassword": "¿Recuerdas tu contraseña?",

    // Subjects page
    "subjects.title": "Explora todas nuestras materias",
    "subjects.subtitle": "Encuentra el tutor perfecto para la materia que te interesa",
    "subjects.tutorsAvailable": "tutores disponibles",
    "subjects.startingFrom": "Desde",
    "subjects.viewTutors": "Ver tutores",
  },
} as const

export function getTranslation(locale: Locale, key: keyof typeof translations.fr): string {
  return translations[locale][key] || translations[defaultLocale][key]
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : "es-ES").format(date)
}

export function formatCurrency(amount: number, locale: Locale): string {
  const currency = locale === "fr" ? "EUR" : locale === "en" ? "USD" : "EUR"
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : locale === "en" ? "en-US" : "es-ES", {
    style: "currency",
    currency,
  }).format(amount)
}
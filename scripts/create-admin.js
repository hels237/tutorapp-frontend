// Script pour créer un administrateur par défaut
// Ce script simule la création d'un admin dans une vraie base de données

const defaultAdmin = {
  id: 1,
  firstName: "Admin",
  lastName: "TutorApp",
  email: "admin@tutorapp.fr",
  password: "admin123", // En production, ce serait hashé avec bcrypt
  userType: "admin",
  isVerified: true,
  isActive: true,
  createdAt: new Date().toISOString(),
}

console.log("🔧 Création de l'administrateur par défaut...")
console.log("📧 Email:", defaultAdmin.email)
console.log("🔑 Mot de passe:", defaultAdmin.password)
console.log("✅ Administrateur créé avec succès!")
console.log("\n📝 Pour vous connecter:")
console.log("1. Allez sur /login")
console.log("2. Utilisez les identifiants:")
console.log("   Email: admin@tutorapp.fr")
console.log("   Mot de passe: admin123")
console.log("3. Vous serez automatiquement redirigé vers le dashboard admin")

// En production, ce script ferait:
// - Connexion à la base de données
// - Hashage du mot de passe avec bcrypt
// - Insertion de l'admin dans la table users
// - Création du profil admin associé

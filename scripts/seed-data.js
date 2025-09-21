// Script pour peupler la base de données avec des données de test
console.log("🌱 Génération des données de test...")

const mockData = {
  subjects: [
    { name: "Mathématiques", category: "Sciences", active: true },
    { name: "Français", category: "Langues", active: true },
    { name: "Anglais", category: "Langues", active: true },
    { name: "Physique-Chimie", category: "Sciences", active: true }
  ],
  
  tutors: [
    { name: "Marie Dubois", email: "marie@tutorapp.fr", subjects: ["Mathématiques"] },
    { name: "Pierre Martin", email: "pierre@tutorapp.fr", subjects: ["Français"] },
    { name: "Sophie Laurent", email: "sophie@tutorapp.fr", subjects: ["Anglais"] }
  ],
  
  students: [
    { name: "Lucas Bernard", email: "lucas@email.com", level: "Terminale" },
    { name: "Emma Rousseau", email: "emma@email.com", level: "Première" }
  ]
}

console.log("✅ Données de test générées!")
console.log(`📚 ${mockData.subjects.length} matières`)
console.log(`👨‍🏫 ${mockData.tutors.length} tuteurs`)  
console.log(`👨‍🎓 ${mockData.students.length} étudiants`)
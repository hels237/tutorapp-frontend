// Script de sauvegarde des données
const fs = require('fs')
const path = require('path')

const backupDir = path.join(__dirname, '../backups')
const timestamp = new Date().toISOString().replace(/[:.]/g, '-')

console.log("💾 Démarrage de la sauvegarde...")

// Créer le dossier de sauvegarde s'il n'existe pas
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true })
}

const backupData = {
  timestamp,
  users: [], // Données utilisateurs
  subjects: [], // Matières
  bookings: [], // Réservations
  reviews: [] // Avis
}

const backupFile = path.join(backupDir, `backup-${timestamp}.json`)
fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2))

console.log(`✅ Sauvegarde créée: ${backupFile}`)
console.log("📊 Données sauvegardées:")
console.log(`   - ${backupData.users.length} utilisateurs`)
console.log(`   - ${backupData.subjects.length} matières`)
console.log(`   - ${backupData.bookings.length} réservations`)
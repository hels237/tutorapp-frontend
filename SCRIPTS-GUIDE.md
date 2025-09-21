# 🛠️ Guide des Scripts TutorApp

## 🚀 Utilisation des scripts

### Méthode 1: Avec pnpm (Recommandé)
```bash
# Créer un administrateur par défaut
pnpm create-admin

# Générer des données de test
pnpm seed-data

# Sauvegarder les données
pnpm backup

# Déployer l'application
pnpm deploy
```

### Méthode 2: Directement avec Node.js
```bash
# Aller dans le dossier du projet
cd "TutorApp-frontend"

# Exécuter les scripts
node scripts/create-admin.js
node scripts/seed-data.js
node scripts/backup-data.js
node scripts/deploy.js
```

## 📋 Description des scripts

### 🔐 create-admin.js
**Utilité**: Créer un compte administrateur par défaut
**Quand l'utiliser**: 
- Premier démarrage du projet
- Après réinitialisation de la base de données
- Pour créer un accès admin de test

**Identifiants créés**:
- Email: `admin@tutorapp.fr`
- Mot de passe: `admin123`

### 🌱 seed-data.js
**Utilité**: Peupler la base avec des données de test
**Quand l'utiliser**:
- Développement local
- Tests automatisés
- Démonstrations

**Données générées**:
- Matières (Maths, Français, Anglais...)
- Tuteurs fictifs
- Étudiants de test

### 💾 backup-data.js
**Utilité**: Sauvegarder toutes les données
**Quand l'utiliser**:
- Avant une mise à jour majeure
- Sauvegarde régulière
- Avant migration

**Fichiers créés**: `backups/backup-[timestamp].json`

### 🚀 deploy.js
**Utilité**: Déploiement automatisé
**Quand l'utiliser**:
- Mise en production
- Déploiement sur serveur
- CI/CD

**Étapes automatisées**:
1. Installation des dépendances
2. Vérification du code (lint)
3. Tests
4. Build de production
5. Optimisations

## 🎯 Exemples d'utilisation

### Démarrage d'un nouveau projet
```bash
pnpm install
pnpm create-admin
pnpm seed-data
pnpm dev
```

### Préparation pour la production
```bash
pnpm backup
pnpm deploy
```

### Développement quotidien
```bash
pnpm dev              # Démarrer en mode développement
pnpm lint             # Vérifier le code
pnpm build            # Tester le build
```

## ⚠️ Notes importantes

- Les scripts utilisent des **données fictives** en développement
- En production, ils se connecteraient à une **vraie base de données**
- Toujours faire un **backup** avant les opérations critiques
- Les mots de passe par défaut doivent être **changés** en production
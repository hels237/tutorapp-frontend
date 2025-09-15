# TutorApp - Guide de démarrage

## 🐳 Lancement rapide avec Docker (Recommandé)

### Prérequis
- Docker et Docker Compose installés

### Commande simple
```bash
# Lancer l'application
./docker-run.sh

# Ou manuellement :
docker-compose up --build
```

**L'application sera accessible sur http://localhost:3000**

## 📦 Installation locale (Alternative)

### Prérequis
- Node.js 18+ 
- pnpm (gestionnaire de paquets)

### Installation rapide
```bash
# Exécuter le script d'installation
./setup.sh

# Ou manuellement :
pnpm install
```

### Commandes disponibles
```bash
# Développement (port 3000)
pnpm dev

# Build de production
pnpm build

# Démarrer en production
pnpm start

# Linting
pnpm lint
```

## Structure du projet
- **Next.js 14** avec App Router
- **TypeScript** pour le typage
- **Tailwind CSS** pour le styling
- **Radix UI** pour les composants
- **React Hook Form** + **Zod** pour les formulaires

## Fonctionnalités
- 🔐 Authentification (login/register)
- 👨‍🏫 Dashboards (tuteur/étudiant/parent)
- 📚 Gestion des matières
- 💳 Système de paiement
- 🎥 Salle de classe virtuelle
- 📊 Système de notation
- 📱 Interface responsive
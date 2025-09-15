#!/bin/bash

echo "🚀 Configuration de l'environnement TutorApp..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé"
    echo "📦 Installation de Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Vérifier si pnpm est installé
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installation de pnpm..."
    npm install -g pnpm
fi

# Installer les dépendances
echo "📦 Installation des dépendances..."
pnpm install

echo "✅ Environnement configuré avec succès!"
echo "🎯 Pour lancer l'application : pnpm dev"
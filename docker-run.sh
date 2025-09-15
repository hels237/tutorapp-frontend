#!/bin/bash

echo "🚀 Lancement de TutorApp avec Docker..."

# Vérifier si Docker est installé
if ! command -v docker &> /dev/null; then
    echo "❌ Docker n'est pas installé"
    echo "📦 Installez Docker depuis: https://docs.docker.com/get-docker/"
    exit 1
fi

# Vérifier si Docker Compose est installé
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose n'est pas installé"
    echo "📦 Installez Docker Compose depuis: https://docs.docker.com/compose/install/"
    exit 1
fi

# Arrêter les conteneurs existants
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down

# Construire et lancer l'application
echo "🔨 Construction de l'image Docker..."
docker-compose up --build -d

echo "✅ TutorApp est maintenant accessible sur:"
echo "🌐 http://localhost:3000"
echo ""
echo "📋 Commandes utiles:"
echo "  - Voir les logs: docker-compose logs -f"
echo "  - Arrêter l'app: docker-compose down"
echo "  - Redémarrer: docker-compose restart"
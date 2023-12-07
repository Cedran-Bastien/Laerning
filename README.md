# Application d’apprentissage de vocabulaires

L'application est un projet [Next.js](https://nextjs.org/) qui nécéssite [Node.js](https://nodejs.org/en/) pour fonctionner.

## Getting Started

Tout d'abord, installer les dépendances du projet:

```bash
npm install
```

Ensuite, lancer le serveur de développement:

```bash
npm run dev
```

Enfin, ouvrir [http://localhost:3000](http://localhost:3000) avec votre navigateur pour voir le résultat.

Nous avons fait le choix de se concentrer sur la partie fonctionnelle et architecturale de l'application au dépend du nombre de fonctionnalité:

- extraction du code metier a l'UX (separation des deux)
  - code metier present dans le repertoire contexte
- optimisation (rapidité d'execution)
- automatisation de la récuperation d'image et des mots correspondant via un Json
- separation des différents composants de l'application en fonction de leur utilité
- architecture facilitant l'ajout de nouvelles fonctionnalités sans régression de l'app

Capture d'écran de l'interface :

![image](interface.png)

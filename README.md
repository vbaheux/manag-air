#  Manag'Air - Exemple de stack Angular / NestJS / MySQL

## Objectifs
- Écrire une application qui affiche un écran avec une liste de pilotes et une liste d'avions sélectionnables, afin de lister dans un tableaux les vols associés.
- La liste des vols pourra être triée et filtrée.
- Le tableau des vols doit permettre d’ajouter des vols.
- Un fichier docker-compose doit permettre de déployer la solution dans un container Docker.

## Démarrer l'application Manag'Air

> #### Pré-requis:
> - Installer Docker Desktop ou Docker Engine (Docker Compose v2.20.3+ ou Docker Desktop v4.22+)
> - Installer Node.js v18 + npm v10

À la racine du projet, lancer la commande `docker compose up` (`-d` pour détacher le processus).

La stack créée doit avoir 3 containers `managair-db-1`, `managair-backend-1`et `managair-frontend-1`.

Une fois tous les containers démarrés, l'application frontend est disponible à l'adresse http://localhost:3001.

L'API Nest est disponible à l'adresse http://localhost:3000. Pour la tester, un Swagger est déployé sur http://localhost:3000/api.

La base de données MySQL est accessible sur le port 3306 avec les identifiants user:user/password:password.

## Fonctionnalités implémentées
### Général
Le projet peut être déployé dans un container Docker.

### Base de données
La base de données MySQL s'initialise avec le fichier `init.sql` fourni.

### Backend
- API REST :
  - Lister les pilotes
  - Listes les avions
  - Détail d'un pilote : informations du pilote + vols associés
  - Détail d'un avion : informations de l'avion + vols associés
  - Création d'un nouveau vol
  - Health check pour vérifier l'état de l'API et des services appelés (ici la BDD)
- Validation des données entrantes avec class-validator
- Tests unitaires et E2E avec Jest
- Récupération des variables d'environnement avec le ConfigModule de Nest
- Intégration avec la base de données via TypeORM
- Gestion et formatage des erreurs de requête / serveur / de base de données
- Log des réponses HTTP sortantes et des erreurs dans la console
- Page de documentation Swagger

### Frontend
- Page d'accueil listant les pilotes et les avions disponibles
  - Chaque pilote / avion dispose d'un bouton permettant d'accéder au détail de ses vols
- Page de détail des pilotes / avion
  - Affichage des informations de l'avion / du pilote
  - Affichage de la liste des vols associés
  - Tri ascendant / descendant par colonne
  - Champ textuel unique pour filtrer les colonnes sur les différents champs
  - Bouton pour créer un nouveau vol associé
- Sur la page de détail : modale pour ajouter un nouveau vol
  - Formulaire avec validation des champs
  - Notifications de confirmation / d'erreur de l'ajout du vol
- Quelques tests unitaires pour s'assurer de la bonne création des components
- Services d'API pour appeler le backend Nest

## Choix de développement
### Général
- IDE : WebStorm 2023.3 (légère préférence sur VSCode, même si les deux conviennent parfaitement)
- Docker : Desktop v4.27.2 (macOS)

### Git
- Syntaxe [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Backend
- Node.js v18 LTS
- Nest.js v10
- ESLint + Prettier pour la qualité de code

> #### Architecture
> Le dossier backend est organisé ainsi :
> ```
> |- src
>     |- api
>         |- avions
>             |- dto      (DTOs d'entrée/sortie de l'API)
>             |- entity   (Définition des modèles pour l'interaction avec la BDD)
>             |- test     (Tests unitaires)
>             |- avions.controller.ts
>             |- avions.module.ts
>             |- avions.service.ts
>         |- pilotes
>             => même structure qu'avions
>         |- vols
>             => même structure qu'avions
>     |- common
>         |- error  (filtre de gestion des erreurs TypeORM)
>         |- logger (middleware de log des requêtes HTTP)
> |- test
>   |- avions
>       |- avions.e2e-spec.ts (tests E2E)
>       |- avions.fixtures.ts (fixtures pour les tests E2E + unitaires)
>   |- pilotes
>       => même structure qu'avions
>   |- vols
>       => même structure qu'avions
> ```
> Nest génère par défaut une architecture de fichiers avec une approche clean architecture, facilement adaptable si l'on souhaite adopter une approche DDD.

### Frontend
- Angular v17 (dernière version)
- Angular Material
- ESLint + Prettier pour la qualité de code
- nginx pour exposer l'application dans le container Docker

> #### Architecture
> Le dossier frontend est organisé ainsi :
> 
> ``` 
> |- src
>     |- api (appels http)
>     |- app
>         |- interceptors (intercepteurs communs à l'application)
>         |- pages (components liés à des pages)
>         |- shared (components utilisés dans les pages)
>     |- assets (styles css communs)
>     |- environments (configuration par environnement)
>     |- model
>       |- dto
>       |- shared (objets utilisés pour le transfert entre components hors DTO)
> ```
> Ces dernières années, l'approche Angular s'éloigne des modules pour privilégier les components standalone. C'est l'approche que j'ai choisi d'utiliser ici.
Cependant, une approche par module aurait également été envisageable.

## Possibilités d'évolution
### CI/CD

Actuellement, les variables d'environnement sont contenues dans les fichiers `.env` et `.env.local` des 3 sections du projet (database, backend et frontend) pour simplifier l'exécution du projet. Ceux-ci doivent être retirés du repository git pour un contexte de production. 
> Ces fichiers sont sensés être ajoutés au .gitignore du projet pour des raisons de sécurité (les identifiants de connexion et les repos git ne font pas bon ménage.)
>
> Avec une CI/CD complète, ces fichiers pourraient être copiés lors du déploiement de l'application dans ses différents environnements (test/production).

### Transverse
#### Authentification
L'étape suivante de ce projet serait d'intégrer un système d'authentification pour accéder à l'application.

>Actions nécessaires :
>- Gestion des utilisateurs en base de données
>- Ajout d'un auth guard sur les endpoints de l'API Nest (avec gestion des rôles pour l'ajout de vols ?)
>- Ajout d'une interface de connexion sur le frontend Angular

#### Rapports de tests
Il serait intéressant de générer des rapports de tests LCOV pour le backend et le frontend. On peut également imaginer une intégration avec des outils comme SonarQube pour s'assurer de la qualité de code.

#### Outils de tests
En plus des tests unitaires et E2E Jest / Karma, selon l'approche souhaitée pour le projet, il est également possible d'intégrer des tests Cucumber.js. Cela serait pertinent si l'on souhaite adopter une approche DDD (domain-driven design) pour l'ensemble du projet.

### Backend
#### Logs
Dans un contexte de production, les logs peuvent être associés à une stack ELK (Elastic/Logstash/Kibana) à des fins de monitoring. Des outils comme [Winston](https://github.com/winstonjs/winston) permettraient cette intégration. 

#### API GraphQL
J'ai fait le choix, pour ce projet, d'exposer une API REST. Nest permet cependant d'implémenter une API GraphQL.

### Frontend
#### Tests
Davantage de tests unitaires peuvent être implémentés par la suite. Il serait également intéressant d'ajouter des tests E2E avec Protractor ou Cypress.

#### Performance
Pour optimiser la performance du client frontend, il est possible de mettre en place du server-side rendering avec Angular Universal.

#### Responsive design
L'application Angular est actuellement optimisée uniquement pour les navigateurs sur écran d'ordinateur. On pourrait optimiser le CSS de l'application pour rendre l'application responsive sur mobile.

#### i18n
L'internationalisation de l'interface (avec des clés de traduction par langue) est également une piste d'évolution possible.

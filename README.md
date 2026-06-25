<div align="center">

# 🍔 Crazy Burger

**Application web de gestion et de commande en temps réel pour un fast-food, développée avec React.**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

**🇫🇷 [Français](#-français) · 🇬🇧 [English](#-english)**

</div>

> ⚠️ **Démo en ligne :** déploiement en cours — lien à venir.

---

# 🇫🇷 Français

## Présentation

Crazy Burger est une application web de gestion et de commande pour un fast-food. L'utilisateur se connecte, puis bascule entre un **mode admin**, pour gérer le menu en temps réel, et un **mode client**, pour parcourir les produits et composer un panier. Les données sont persistées et synchronisées en direct via Firebase.

Le projet est développé selon une approche orientée fonctionnalités, dans un workflow Agile basé sur des tickets, avec un soin particulier porté à l'architecture, au design system réutilisable et à une gestion du state global maintenable.

## Captures d'écran

> _Ajouter ici 2–3 captures ou un court GIF (connexion, gestion du menu en admin, panier)._

| Connexion | Gestion du menu (admin) | Panier |
|-----------|------------------------|--------|
| _capture_ | _capture_ | _capture_ |

## Fonctionnalités

- 🔐 **Authentification** — connexion par identifiant avec persistance de session.
- 🛠️ **Mode admin** — ajout, modification et suppression de produits via une interface CRUD complète.
- ⚡ **Synchronisation temps réel** — les changements de produits se propagent instantanément via Firebase Firestore.
- 🛒 **Panier dynamique** — ajout/suppression d'articles, quantités et total en direct.
- 🎨 **Design system** — thème centralisé (couleurs, espacements, typographie) avec Styled Components.
- 🎞️ **Animations** — transitions fluides à l'apparition/disparition des produits et du panier.
- 📱 **Interface responsive** — intégration au pixel près des maquettes Figma sur toutes les tailles d'écran.
- 🧭 **Routing côté client** — navigation gérée avec React Router.

## Stack technique

| Couche | Technologies |
|--------|-------------|
| **UI** | React (hooks, custom hooks), Styled Components (CSS-in-JS) |
| **State** | React Context API (state global, sans Redux) |
| **Routing** | React Router v6 |
| **Backend / données** | Firebase — Firestore (CRUD, temps réel), Authentication, Cloud Storage |
| **Animations** | react-transition-group |
| **Outils** | Git / GitHub, ESLint, Prettier |

## Architecture

Le code suit une **structure orientée fonctionnalités**, avec une séparation claire entre l'UI réutilisable, le state global, la logique métier et l'accès aux données :

```
src/
├── components/        # Composants UI (primitives réutilisables + pages)
├── context/           # Providers React Context (state global)
├── hooks/             # Custom hooks (logique encapsulée)
├── theme/             # Design system : tokens de thème & styles globaux
├── api/               # Configuration Firebase & fonctions d'accès aux données
├── utils/             # Helpers & fonctions pures
└── enums/ constants/  # Constantes partagées
```

> _Adapter cette arborescence à votre structure de dossiers réelle._

## Choix techniques

Les décisions d'ingénierie assumées derrière le projet :

- **State global avec la Context API (sans Redux).** Le state est découpé en contextes ciblés et exposé via des custom hooks, avec mémoïsation des valeurs pour contenir les re-renders à mesure que l'application grandit.
- **Un vrai design system, pas du CSS éparpillé.** Toutes les décisions visuelles vivent dans un thème central consommé par Styled Components — aucune collision de classes, pas de `!important`, un styling cohérent partout.
- **Custom hooks pour la réutilisation de la logique.** La logique de données et d'UI (menu, panier, auth) est encapsulée dans des hooks dédiés, gardant les composants légers et la logique testable.
- **Flux de données temps réel.** Firestore pilote une UI vivante : une modification admin se reflète immédiatement, sans rafraîchissement manuel.
- **Rendu attentif aux performances.** `useMemo` / `useCallback` utilisés là où c'est réellement utile, pour éviter les re-renders inutiles.
- **Historique git propre et incrémental.** Développement ticket par ticket, avec un usage avancé de git (branches, rebase, résolution de conflits).

## Démarrage

### Prérequis

- Node.js ≥ 18
- Un projet Firebase (Firestore + Authentication activés)

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/Mvnsour/crazee-burger.git
cd crazee-burger

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (voir ci-dessous)
cp .env.example .env

# 4. Lancer le serveur de développement
npm run dev      # ou : npm start — selon votre configuration
```

### Variables d'environnement

Créer un fichier `.env` à la racine avec vos identifiants Firebase :

```env
VITE_FIREBASE_API_KEY=votre_api_key
VITE_FIREBASE_AUTH_DOMAIN=votre_projet.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=votre_project_id
VITE_FIREBASE_STORAGE_BUCKET=votre_projet.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
VITE_FIREBASE_APP_ID=votre_app_id
```

> _Préfixer les variables avec `REACT_APP_` au lieu de `VITE_` si le projet utilise Create React App._

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` / `npm start` | Lance l'application en mode développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Lance ESLint |

<br>

---

# 🇬🇧 English

## Overview

Crazy Burger is a web application for managing and ordering at a fast-food restaurant. A user logs in, then switches between an **admin mode**, to manage the menu in real time, and a **customer mode**, to browse products and build a basket. Data is persisted and synchronised live through Firebase.

The project is built around a feature-oriented approach, in an Agile ticket-based workflow, with a strong focus on architecture, a reusable design system, and maintainable global state.

## Screenshots

> _Add 2–3 screenshots or a short GIF here (login, admin menu management, basket)._

| Login | Admin / menu management | Basket |
|-------|------------------------|--------|
| _screenshot_ | _screenshot_ | _screenshot_ |

## Features

- 🔐 **Authentication** — username-based login with session persistence.
- 🛠️ **Admin mode** — add, edit and delete products with a full CRUD interface.
- ⚡ **Real-time sync** — product changes propagate instantly via Firebase Firestore.
- 🛒 **Dynamic basket** — add/remove items, quantities and live total.
- 🎨 **Design system** — centralised theme (colors, spacing, typography) with Styled Components.
- 🎞️ **Animations** — smooth enter/leave transitions on menu items and basket.
- 📱 **Responsive UI** — pixel-perfect integration of Figma mockups across screen sizes.
- 🧭 **Client-side routing** — navigation handled with React Router.

## Tech stack

| Layer | Technologies |
|-------|-------------|
| **UI** | React (hooks, custom hooks), Styled Components (CSS-in-JS) |
| **State** | React Context API (global state, no Redux) |
| **Routing** | React Router v6 |
| **Backend / data** | Firebase — Firestore (CRUD, real-time), Authentication, Cloud Storage |
| **Animations** | react-transition-group |
| **Tooling** | Git / GitHub, ESLint, Prettier |

## Architecture

The codebase follows a **feature-oriented structure** with a clear separation between reusable UI, global state, business logic and data access:

```
src/
├── components/        # UI components (reusable primitives + pages)
├── context/           # React Context providers (global state)
├── hooks/             # Custom hooks (encapsulated logic)
├── theme/             # Design system: theme tokens & global styles
├── api/               # Firebase config & data-access functions
├── utils/             # Helpers & pure functions
└── enums/ constants/  # Shared constants
```

> _Adjust this tree to match your actual folder layout._

## Technical highlights

The deliberate engineering choices behind the project:

- **Global state with the Context API (no Redux).** State is split into focused contexts and exposed through custom hooks, with memoised values to keep re-renders contained as the app grows.
- **A real design system, not scattered CSS.** All visual decisions live in a central theme consumed by Styled Components — no class-name collisions, no `!important`, consistent styling everywhere.
- **Custom hooks for logic reuse.** Data and UI logic (menu, basket, auth) is encapsulated in dedicated hooks, keeping components lean and the logic testable.
- **Real-time data flow.** Firestore drives a live UI: an admin edit is reflected immediately, without manual refresh.
- **Performance-aware rendering.** `useMemo` / `useCallback` are used where they actually matter to avoid needless re-renders.
- **Clean, incremental git history.** Developed ticket by ticket, with advanced git usage (branching, rebasing, conflict resolution).

## Getting started

### Prerequisites

- Node.js ≥ 18
- A Firebase project (Firestore + Authentication enabled)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mvnsour/crazee-burger.git
cd crazee-burger

# 2. Install dependencies
npm install

# 3. Configure environment variables (see below)
cp .env.example .env

# 4. Start the development server
npm run dev      # or: npm start — depending on your setup
```

### Environment variables

Create a `.env` file at the project root with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

> _Prefix variables with `REACT_APP_` instead of `VITE_` if the project uses Create React App._

## Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` / `npm start` | Run the app in development mode |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

<div align="center">
<sub>React · Styled Components · Firebase</sub>
</div>

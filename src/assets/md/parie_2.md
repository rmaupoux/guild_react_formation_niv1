## Structure d'un composant React

Un composant React moderne est une **fonction JavaScript** qui retourne du JSX. Voici les 3 briques essentielles sur un exemple de compteur :Les 4 zones correspondent aux 4 blocs de tout composant React :

**Zone 1 — Import** : on déclare les hooks dont on a besoin. `useState` vient du package `react`.

**Zone 2 — Déclaration** : un composant est une simple fonction JS dont le nom commence par une majuscule.

**Zone 3 — useState** : le hook retourne un tableau de deux éléments — la valeur actuelle et la fonction pour la modifier. Quand `setCompteur` est appelé, React re-rend le composant avec la nouvelle valeur.

**Zone 4 — JSX** : le `return` décrit l'interface. Les accolades `{ }` permettent d'injecter n'importe quelle expression JavaScript dans le HTML. Les événements s'écrivent en camelCase (`onClick`, `onChange`…).

> La règle d'or : on ne modifie **jamais** la valeur directement (`compteur = 1` est interdit), on passe toujours par le setter (`setCompteur(1)`), sinon React ne sait pas qu'il doit re-rendre.
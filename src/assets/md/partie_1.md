## Le DOM virtuel dans React

### Le problème avec le DOM réel

Manipuler le DOM du navigateur est **coûteux**. Chaque modification (ajouter un élément, changer un texte) peut déclencher un **recalcul de styles**, un **reflow** (recalcul de la mise en page) et un **repaint** (redessin à l'écran). Sur une application complexe avec des dizaines de mises à jour par seconde, ça devient vite un goulot d'étranglement.

---

### La solution de React : le DOM virtuel

React maintient en mémoire une **représentation légère du DOM**, appelée le **Virtual DOM** (vDOM). C'est simplement un arbre d'objets JavaScript qui décrit à quoi devrait ressembler l'interface.

Voici un schéma pour visualiser le mécanisme :---

### Le cycle en 3 étapes

**1. Rendu → vDOM v1.** Quand un composant s'affiche pour la première fois, React crée un arbre d'objets JS (le vDOM) et le traduit en vrais nœuds dans le navigateur.

**2. Changement d'état → vDOM v2.** Dès qu'un `setState()` est appelé, React recalcule l'arbre en mémoire — pas dans le navigateur. C'est ultra-rapide car manipuler des objets JS coûte presque rien.

**3. Diff + Patch (réconciliation).** React compare v1 et v2 nœud par nœud. Il identifie précisément ce qui a changé et n'applique que ces différences au DOM réel. Dans l'exemple ci-dessus, seul `<li> B → C` est modifié — `<App>`, `<ul>` et `<li> A` ne sont pas touchés.

---

### Pourquoi c'est important pour toi en tant que dev

Tu n'as jamais à écrire `document.getElementById('...')` ou à manipuler le DOM à la main. Tu décris **ce que l'interface doit montrer** en fonction de l'état, et React se charge du reste. C'est le cœur de la philosophie React : **UI = f(state)**.
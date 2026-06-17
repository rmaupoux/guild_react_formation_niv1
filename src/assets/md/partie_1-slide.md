
**Le problème** — Manipuler le DOM du navigateur est coûteux : chaque modification déclenche recalculs de styles, reflow et repaint. Sur une app complexe, ça devient vite un goulot d'étranglement.
---

** La solution : le vDOM** — React maintient en mémoire une copie légère du DOM (de simples objets JavaScript). Quand l'état change via `setState()`, React recalcule cette copie en mémoire — pas dans le navigateur — ce qui est quasi instantané.
---

** La réconciliation** — React compare l'ancien et le nouveau vDOM (le *diff*), identifie précisément ce qui a changé, et n'applique que ces différences au DOM réel (le *patch*). Résultat : au lieu de tout redessiner, un seul nœud est mis à jour.

> **En une phrase :** React ne touche jamais le DOM sans raison — il calcule d'abord le minimum nécessaire, puis frappe une seule fois.
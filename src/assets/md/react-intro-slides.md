<!-- # React pour Data Analysts
## Introduction à React pour ceux qui vivent dans pandas 🐼

--- -->

## Le problème qu'on cherche à résoudre

Vous avez des données → vous voulez les **rendre interactives** sur le web

```
CSV / DataFrame
      ↓
  Analyse Python
      ↓
  Graphe statique  ← on veut mieux que ça
```

**Et si l'utilisateur pouvait filtrer, explorer, interagir ?**

---

## Ce que React permet

```
CSV / DataFrame
      ↓
   API / JSON
      ↓
  React → Interface interactive
            ├── Tableaux filtrables
            ├── Graphes dynamiques
            └── Dashboards en temps réel
```

> React = la couche qui **relie vos données au navigateur**

---

## Concept 1 : Le Composant

Un composant = **une fonction** qui retourne de l'interface

```jsx
function CarteMetrique({ titre, valeur }) {
  return (
    <div className="carte">
      <h3>{titre}</h3>
      <p>{valeur}</p>
    </div>
  );
}
```

<div style="display: inline-block; background: linear-gradient(135deg, #4f8ef7 0%, #2e5ab8 100%); color: white; padding: 1.5rem 2.5rem; border-radius: 50px; box-shadow: 0 8px 16px rgba(79, 142, 247, 0.3); text-align: center; min-width: 200px;">
  <div style="font-size: 0.6em; opacity: 0.9; margin-bottom: 0.5rem;">Ventes totales</div>
  <div style="font-size: 1.6em; font-weight: bold; letter-spacing: 0.5px;">42 500 €</div>
</div>

> Pensez-y comme une **fonction Python qui retourne du HTML**

---

## Concept 2 : Les Props

Les props = les **paramètres** du composant

```jsx
// Définition
function Badge({ label, couleur }) {
  return <span style={{ background: couleur }}>{label}</span>;
}

// Utilisation
<Badge label="Urgent"  couleur="red"   />
<Badge label="Normal"  couleur="green" />
<Badge label="En cours" couleur="blue" />
```

<div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
  <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: linear-gradient(135deg, #ef5350 0%, #c62828 100%); color: white; padding: 0.4rem 1rem; border-radius: 50px; box-shadow: 0 4px 12px rgba(239, 83, 80, 0.3); font-weight: 500; font-size: 0.85em;">
    🔴 Urgent
  </div>
  <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: linear-gradient(135deg, #66bb6a 0%, #2e7d32 100%); color: white; padding: 0.4rem 1rem; border-radius: 50px; box-shadow: 0 4px 12px rgba(102, 187, 106, 0.3); font-weight: 500; font-size: 0.85em;">
    🟢 Normal
  </div>
  <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: linear-gradient(135deg, #4f8ef7 0%, #2e5ab8 100%); color: white; padding: 0.4rem 1rem; border-radius: 50px; box-shadow: 0 4px 12px rgba(79, 142, 247, 0.3); font-weight: 500; font-size: 0.85em;">
    🔵 En cours
  </div>
</div>

<!-- > Props entrent → composant transforme → interface sort -->

---

## Concept 3 : Le State

Le state = la **mémoire** du composant

```jsx
function Compteur() {
  const [valeur, setValeur] = useState(0);

  return (
    <div>
      <p>Valeur : {valeur}</p>
      <button onClick={() => setValeur(valeur + 1)}>
        +1
      </button>
    </div>
  );
}
```


> État change → **React re-affiche automatiquement**


<!-- > Comme une **cellule de variable** qui déclenche un recalcul -->

---

## Analogie Data Analyst

```
╔══════════════════════╦══════════════════════╗
║  Python / pandas     ║  React               ║
╠══════════════════════╬══════════════════════╣
║  Fonction            ║  Composant           ║
║  Paramètres          ║  Props               ║
║  Variable globale    ║  State               ║
║  df.query(filtre)    ║  useState + filter   ║
║  df.to_html()        ║  return <table>      ║
╚══════════════════════╩══════════════════════╝
```

---

## Le JSX : HTML dans JavaScript

Au début ça surprend, puis ça devient naturel

```jsx
// JSX — ce que vous écrivez
function Alerte({ message }) {
  return (
    <div className="alerte">
      <span>⚠️</span>
      <p>{message}</p>
    </div>
  );
}
```

```html
<!-- Ce que le navigateur reçoit -->
<div class="alerte">
  <span>⚠️</span>
  <p>Données manquantes détectées</p>
</div>
```

---
<!-- 
## Démo Live — Mini Dashboard

Ce qu'on va construire :

```
┌─────────────────────────────────────────┐
│  🔍 Filtrer par région : [__________]   │
├─────────────────────────────────────────┤
│  Région    │  Ventes  │  Croissance     │
│ ───────────┼──────────┼─────────────── │
│  Nord      │  12 400  │  +8%           │
│  Sud       │  9 800   │  +3%           │
│  Est       │  15 200  │  +12%          │
└─────────────────────────────────────────┘
```

**Input utilisateur → State → Re-render du tableau**

---

## Démo — Le code complet

```jsx
const donnees = [
  { region: "Nord", ventes: 12400, croissance: "+8%" },
  { region: "Sud",  ventes: 9800,  croissance: "+3%" },
  { region: "Est",  ventes: 15200, croissance: "+12%" },
];

function Dashboard() {
  const [filtre, setFiltre] = useState("");

  const lignesFiltrees = donnees.filter(d =>
    d.region.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Filtrer par région…"
        onChange={e => setFiltre(e.target.value)}
      />
      <table>
        <thead>
          <tr><th>Région</th><th>Ventes</th><th>Croissance</th></tr>
        </thead>
        <tbody>
          {lignesFiltrees.map(d => (
            <tr key={d.region}>
              <td>{d.region}</td>
              <td>{d.ventes}</td>
              <td>{d.croissance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
``` -->



## L'écosystème à connaître

```
React (UI)
  ├── Vite          → démarrer un projet en 30 secondes
  ├── Recharts      → graphiques (LineChart, BarChart…)
  ├── Plotly React  → graphes scientifiques avancés
  └── TanStack Table → tableaux puissants et filtrables
```

**Pour commencer :**
```bash
npm create vite@latest mon-dashboard -- --template react
cd mon-dashboard
npm install
npm run dev
```

---

<!-- ## React vs Streamlit

```
╔═══════════════╦═════════════════╦═════════════════╗
║               ║   Streamlit     ║     React       ║
╠═══════════════╬═════════════════╬═════════════════╣
║ Apprentissage ║  ⭐ Très facile  ║  ⭐⭐⭐ Modéré   ║
║ Performance   ║  ⭐⭐ Moyen      ║  ⭐⭐⭐ Excellent ║
║ Personnalisa. ║  ⭐⭐ Limité     ║  ⭐⭐⭐ Total     ║
║ Déploiement   ║  ⭐⭐⭐ Simple   ║  ⭐⭐ CI/CD      ║
║ Collaboration ║  Data Scientists ║  Dev teams      ║
╚═══════════════╩═════════════════╩═════════════════╝
```

> **Règle simple :** Streamlit pour explorer, React pour livrer

--- -->

## Ce qu'on a vu aujourd'hui

```
React
  ├── Composant  → brique réutilisable (= fonction)
  ├── Props      → données passées en paramètre
  ├── State      → mémoire qui déclenche le re-render
  └── JSX        → HTML dans JavaScript
```

**Votre prochaine étape :**
Prendre un de vos datasets et le rendre filtrable avec React



<!-- ## Ressources

- 📖 **react.dev** — La doc officielle (excellente)
- 📊 **recharts.org** — Graphes React prêts à l'emploi
- ⚡ **vitejs.dev** — Démarrer un projet React rapidement
- 🧪 **codesandbox.io** — Tester React sans rien installer

--- -->



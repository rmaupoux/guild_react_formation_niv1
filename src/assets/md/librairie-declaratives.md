

#### Comparaison : Javascript seul vs React

<div class="two-columns">
<div>

#### ![JS](/src/assets/javascript.svg) Approche Impérative (Vanilla JS)

> "On doit tout définir et faire de manière explicite."

```html
<body>

  <button id="decrement">-</button>
  
  <span id="count">0</span>

  <button id="increment">+</button>

  <script>
    const decrementButton = 
      document.getElementById('decrement');
    const incrementButton = 
      document.getElementById('increment');
    const countSpan = 
      document.getElementById('count');

    let count = 0;

    decrementButton.addEventListener(
      'click', () => {
        count--;
        countSpan.innerText = count;
      }
    );

    incrementButton.addEventListener(
      'click', () => {
        count++;
        countSpan.innerText = count;
      }
    );
  </script>

</body>
```

</div>
<div>

#### ![React](/src/assets/images/react-icon.png) Approche Déclarative (React)

> "On déclare ce qu'on veut de manière humainement visible"

```jsx
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => 
        setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button onClick={() => 
        setCount(count + 1)}>
        +
      </button>
    </div>
  );
}

export default Counter;
```

</div>
</div>





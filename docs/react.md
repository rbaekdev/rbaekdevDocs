---
sidebar_position: 6
---

# React

## Hooks

Info about hooks that you'll likely use a lot in functional React components

```js
import {useState, useRef, useEffect} from 'react'
```

### useState
```jsx
const [count, setCount] = useState(0);
```

### useRef
```jsx
    const refElement = useRef();

    return (
        <video src={src} ref={refElement} />
    )
```

### useEffect
```jsx
useEffect(()=>{
    const ref = refElement.current;
    if(count > 3 && ref){
        ref.play();
    }
},[count])
```

## JSX

```jsx
...
const data =[
    {id: "3fa", action: "run", title: "Spring"}, 
    {id: "zw2", action: "skip", title: "Summer"},
    {id: "1dc", action: "walk", title: "Fall"}
    ]

return (
    <div style={{flex: 1}} id="list-container">
        <ul>
            {data.map((item, i) => {
                return <li key={item.id} onClick={()=>{doTheThing(item.action, i)}}> {item.title} </li>
            })}
        </ul>
    </div>
)
```

## Helpful packages
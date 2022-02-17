---
sidebar_position: 7
---

# CSS

## Flex
```css title="Properties you will use  a lot"
    .flex{
        display: "flex";
        flex: --spaceOutOfTotalFlex ;
        flex-direction: "column";   //column, row
        justify-content: "space-between";  //flex-start, flex-end, center, space-between, space-around, space-evenly
        align-items: "center";  //flex-start, flex-end, center
    }
```

## Animation

## Transform

## Responsive Layout Strategies

## Tricks & Tips

## Gotchas

## Dynamic inline styles - React / Preact

```jsx
    <div style={{transform: `scale(${scale})`,  animation: `${animation}`}}>
        {children}
    </div>
```
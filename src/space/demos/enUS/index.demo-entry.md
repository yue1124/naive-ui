# Space

A great invention (which is not invented by me).

## Demos

```demo
basic.vue
vertical.vue
from-end.vue
space-between.vue
space-around.vue
center.vue
```

## API

### Space Props

| Name | Type | Default | Description | Version |
| --- | --- | --- | --- | --- |
| align | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | `undefined` | Vertical arrangement. |  |
| inline | `boolean` | `false` | Is it an inline element. |  |
| item-style | `string \| object` | `undefined` | Node style. |  |
| justify | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` | Horizontal arrangement. | `'space-evenly'` NEXT_VERSION |
| size | `'small' \| 'medium' \| 'large' \| number \| [number, number]` | `'medium'` | When it's a number, it will be used as vertical and horizontal gap, or it is [horizontalGap, verticalGap]. |  |
| vertical | `boolean` | `false` | Whether to lay out vertically. |  |
| wrap | `boolean` | `true` | Whether to exceed the line break. |  |

### Space Slots

| Name    | Parameters | Description      |
| ------- | ---------- | ---------------- |
| default | `()`       | Spacing content. |

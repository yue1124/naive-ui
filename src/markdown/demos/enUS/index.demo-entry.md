<!--single-column-->

# Markdown

A simple component that displays Markdown text.

## Demos

```demo
basic.vue
```

## API

### Calendar Props

| Name | Type | Default | Description | Version |
| --- | --- | --- | --- | --- |
| value | `string \| null` | `undefined` | Markdown text |  |
| softbreak | `'br' \| 'n'` | `'br'` | using '\n' or 'br' tag for softbreak |  |
| inlinecode | `'text' \| '<language>'` | `'text'` | using NText's code style or NCode's inline style |  |
| stong | `'html' \| 'naive'` | `'html'` | using NText's strong style or HTML's strong tag |  |
| emph | `'html' \| 'naive'` | `'html'` | using NText's italic style or HTML's i tag |  |
| img-src-prefix | `string \| null` | `null` | add prefix for image's relative url path |  |

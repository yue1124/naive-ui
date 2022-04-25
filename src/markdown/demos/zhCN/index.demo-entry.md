<!--single-column-->

# 结构文本展示 Markdown

一个简易的展示 Markdown 文本的组件

## 演示

```demo
basic.vue
```

## API

### Calendar Props

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| value | `string \| null` | `undefined` | Markdown 文本 |  |
| softbreak | `'br' \| 'n'` | `'br'` | 软换行使用'\n'或者'br'标签 |  |
| inlinecode | `'text' \| '<language>'` | `'text'` | 使用 NText 的 code 样式或者 NCode 的 inline 样式 |  |
| stong | `'html' \| 'naive'` | `'html'` | 使用 NText 的 strong 样式或者'strong'标签 |  |
| emph | `'html' \| 'naive'` | `'html'` | 使用 NText 的 italic 样式或者'i'标签 |  |
| img-src-prefix | `string \| null` | `null` | 为 markdown 中图片的相对路径加上前缀 |  |

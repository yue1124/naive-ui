<markdown>
# 代码块中的滚动条
</markdown>

<template>
  <n-markdown :value="value" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const value = ref(`# 代码块

\`\`\`python
def func():
    print("这是一串非常长的文字，用于测试代码块中，单行长度非常长的时候，滚动条的样式如何。实际上，大多数可阅读的代码单行长度都不会太长，会出现滚动条，主要是屏幕比较小导致的。总而言之，你现在能看到滚动条了吗，它是不是原生的，还是和整个网站是风格统一的呢，会不会和内容重叠或者覆盖呢？我可以保证这一串字非常的长。")
\`\`\`
`)

    return {
      value
    }
  }
})
</script>

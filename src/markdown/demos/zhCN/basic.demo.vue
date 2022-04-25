<markdown>
# 基础用法
</markdown>

<template>
  <n-markdown :value="value" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const value = ref(`# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
####### 七级标题
######## 八级标题

## 加粗
**加粗**

## 图片
![logo](https://bigyue.cn/statics/icon.png "bigyue.cn")

## 超链接
[bigyue.cn](https://bigyue.cn)

## 斜体
*斜体*

## 粗斜体
***粗斜体***

## 代码块

\`\`\`python
def func():
    print("hello world")
\`\`\`

行内代码: \`int i = 0;\`

## 文字区块

> 我相信梦想成真  
就要跳出生活圈

## 有序列表

1. 第一点
2. 第二点

## 无序列表

* 第一点
* 第二点
* 第三点`)

    return {
      value
    }
  }
})
</script>

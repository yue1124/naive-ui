# 选中行

可以通过把第一列的类型设为 `selection` 来让行变成可选的。

```html
<n-p> 你选中了 {{ checkedRowKeys.length }} 行。 </n-p>

<n-data-table
  :columns="columns"
  :data="data"
  :pagination="pagination"
  :row-key="row => row.address"
  @update:checked-row-keys="handleCheck"
/>
```

```js
import { defineComponent, ref } from 'vue'

const columns = [
  {
    type: 'selection',
    disabled (row, index) {
      return row.name === 'Edward King 3'
    }
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data = Array.apply(null, { length: 46 }).map((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

export default defineComponent({
  setup () {
    const checkedRowKeysRef = ref([])

    return {
      data,
      columns,
      checkedRowKeys: checkedRowKeysRef,
      pagination: {
        pageSize: 5
      },
      handleCheck (rowKeys) {
        checkedRowKeysRef.value = rowKeys
      }
    }
  }
})
```

# smart-select-diba

A Vue.js smart select dropdown component with built-in search functionality, supporting **Vue 2**, **Vue 3**, and **Nuxt**.  
Fully customizable and lightweight.

---

## Features

- Works with Vue 2 and Vue 3  
- Searchable dropdown options  
- Clear selected option functionality  
- Fully customizable labels and placeholders  
- Compatible with SSR (Nuxt.js support)  
- No external CSS dependencies (styled scoped in component)  

---

## Installation

```bash
npm install smart-select-diba
# or
yarn add smart-select-diba

 Usage Vue 3
<template>
  <SmartSelectVue3
    :options="options"
    :valueDefault="defaultOption"
    @selected="onSelected"
    @remove="onRemove"
  />
</template>

<script setup>
import { ref } from 'vue'
import { SmartSelectVue3 } from 'smart-select-diba'
import 'smart-select-diba/dist/smart-select-diba.css'

const options = ref([
  { title: 'Option 1', id: 1 },
  { title: 'Option 2', id: 2 },
  // ...
])

const defaultOption = ref(null)

function onSelected(item) {
  console.log('Selected:', item)
}

function onRemove() {
  console.log('Selection cleared')
}
</script>

Usage Vue 2
<template>
  <smart-select-vue2
    :options="options"
    :value-default="defaultOption"
    @selected="onSelected"
    @remove="onRemove"
  />
</template>

<script>
import { SmartSelectVue2 } from 'smart-select-diba'
import 'smart-select-diba/dist/smart-select-diba.css'

export default {
  components: {
    SmartSelectVue2,
  },
  data() {
    return {
      options: [
        { title: 'Option 1', id: 1 },
        { title: 'Option 2', id: 2 },
        // ...
      ],
      defaultOption: null,
    }
  },
  methods: {
    onSelected(item) {
      console.log('Selected:', item)
    },
    onRemove() {
      console.log('Selection cleared')
    },
  },
}
</script>
Props
| Prop Name      | Type   | Default                     | Description                                                 |
| -------------- | ------ | --------------------------- | ----------------------------------------------------------- |
| `options`      | Array  | `[]`                        | The list of options available for selection.                |
| `keyLabel`     | String | `'title'`                   | The key used to display the label of each option.           |
| `label`        | String | `'Please select an option'` | Placeholder text shown in the main input field.             |
| `labelSearch`  | String | `'Search...'`               | Placeholder text shown in the search input inside dropdown. |
| `labelNoItems` | String | `'No items to display'`     | Message shown when no options match the search query.       |
| `valueDefault` | Object | `null`                      | The initially selected option (default value).              |

Events
| Event Name | Parameters       | Description                                  |
| ---------- | ---------------- | -------------------------------------------- |
| `selected` | `(item: Object)` | Emitted when the user selects an option.     |
| `remove`   | `()`             | Emitted when the selected option is cleared. |

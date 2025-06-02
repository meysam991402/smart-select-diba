<template>
    <form @submit.prevent class="smart-select-form">
      <div class="smart-select-input-wrapper">
        <input
          ref="inputRef"
          type="text"
          readonly
          :placeholder="labelPlaceholder"
          v-model="labelItem"
          @click="onClickInput"
          class="smart-select-input"
        />
        <button
          v-if="labelItem"
          type="button"
          @click="removeValueSelectItem"
          aria-label="حذف انتخاب"
          class="smart-select-clear-btn"
        >
          ×
        </button>
      </div>
  
      <div v-if="showSubMenu" ref="dropdownRef" class="smart-select-dropdown">
        <input
          type="search"
          v-model="searchItem"
          :placeholder="labelSearch"
          class="smart-select-search"
        />
        <ul class="smart-select-list" @mousedown.prevent>
          <li v-if="filteredOptions.length === 0" class="no-items">
            {{ labelNoItems }}
          </li>
          <li v-for="(item, index) in filteredOptions" :key="index" class="smart-select-item">
            <button
              type="button"
              class="smart-select-item-btn"
              @mousedown.prevent="setValueInput(item)"
            >
              {{ item[keyLabel] }}
            </button>
          </li>
        </ul>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'SmartSelect',
    props: {
      options: {
        type: Array,
        default: () => []
      },
      keyLabel: {
        type: String,
        default: 'title'
      },
      labelPlaceholder: {
        type: String,
        default: 'لطفا یک گزینه انتخاب کنید'
      },
      labelSearch: {
        type: String,
        default: 'جستجو ...'
      },
      labelNoItems: {
        type: String,
        default: 'ایتمی برای نمایش وجود ندارد'
      },
      valueDefault: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        showSubMenu: false,
        searchItem: '',
        labelItem: this.valueDefault ? this.valueDefault[this.keyLabel] : '',
        valueItem: this.valueDefault,
      }
    },
    computed: {
      filteredOptions() {
        if (!this.searchItem) return this.options
        return this.options.filter(item =>
          item[this.keyLabel].toLowerCase().includes(this.searchItem.toLowerCase())
        )
      }
    },
    methods: {
      setValueInput(item) {
        this.labelItem = item[this.keyLabel]
        this.valueItem = item
        this.searchItem = ''
        this.$emit('selected', item)
        this.showSubMenu = false
      },
      removeValueSelectItem() {
        this.labelItem = ''
        this.searchItem = ''
        this.valueItem = null
        this.$emit('remove', null)
        this.showSubMenu = false
      },
      onClickInput() {
        this.showSubMenu = true
      },
      onClickOutside(event) {
        if (
          !this.$refs.inputRef.contains(event.target) &&
          (!this.$refs.dropdownRef || !this.$refs.dropdownRef.contains(event.target))
        ) {
          this.showSubMenu = false
        }
      }
    },
    mounted() {
      document.addEventListener('mousedown', this.onClickOutside)
    },
    beforeDestroy() {
      document.removeEventListener('mousedown', this.onClickOutside)
    }
  }
  </script>
  <style scoped>
  .smart-select-form {
    max-width: 400px;
    position: relative;
    font-family: sans-serif;
  }
  
  .smart-select-input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #999;
    border-radius: 6px;
    padding: 0px 10px;
    background: transparent;
  }
  
  .smart-select-input {
    flex-grow: 1;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 0;
  }
  
  .smart-select-clear-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 0 6px;
    color: #555;
  }
  
  .smart-select-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      width: 100%;
      background: white;
      border-radius: 6px;
      margin-top: 6px;
      box-shadow: 0 2px 8px rgb(0 0 0 / 29%);
      z-index: 100;
      overflow: hidden;
    padding: 10px;

  }
  
  .smart-select-search {
    width: 100%;
    padding: 8px 10px;
    
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
    border-radius: 8px;
  }
  
  .smart-select-list {
    max-height: 250px;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 12px;
  }
  
  .smart-select-item {
    border-top: 1px solid #eee;
  }
  
  .smart-select-item-btn {
    width: 100%;
    padding: 8px 10px;
    text-align: start;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 14px;
  }
  
  .smart-select-item-btn:hover {
    background-color: #f0f0f0;
  }
  
  .no-items {
    padding: 10px;
    text-align: center;
    color: #999;
  }
  </style>
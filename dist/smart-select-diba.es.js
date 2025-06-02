import { ref as m, onMounted as R, onBeforeUnmount as x, createElementBlock as o, openBlock as r, withModifiers as f, createElementVNode as u, createCommentVNode as p, withDirectives as b, vModelText as y, toDisplayString as S, Fragment as g, renderList as C } from "vue";
const M = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [v, n] of t)
    l[v] = n;
  return l;
}, E = { class: "smart-select-input-wrapper" }, N = ["placeholder"], U = ["placeholder"], P = {
  key: 0,
  class: "no-items"
}, B = ["onMousedown"], j = {
  __name: "SmartSelect",
  props: {
    options: { type: Array, default: () => [] },
    keyLabel: { type: String, default: "title" },
    labelPlaceholder: { type: String, default: "لطفا یک گزینه انتخاب کنید" },
    labelSearch: { type: String, default: "جستجو ..." },
    labelNoItems: { type: String, default: "ایتمی برای نمایش وجود ندارد" },
    valueDefault: { type: Object, default: null }
  },
  emits: ["selected", "remove"],
  setup(e, { emit: t }) {
    const l = e, v = t, n = m(!1), a = m(""), s = m(l.valueDefault ? l.valueDefault[l.keyLabel] : ""), h = m(l.valueDefault), I = m(null), k = m(null);
    function w() {
      return a.value ? l.options.filter(
        (i) => i[l.keyLabel].toLowerCase().includes(a.value.toLowerCase())
      ) : l.options;
    }
    function _(i) {
      s.value = i[l.keyLabel], h.value = i, a.value = "", v("selected", i), n.value = !1;
    }
    function V() {
      s.value = "", a.value = "", h.value = null, v("remove", null), n.value = !1;
    }
    function D() {
      n.value = !0;
    }
    function L(i) {
      !I.value.contains(i.target) && (!k.value || !k.value.contains(i.target)) && (n.value = !1);
    }
    return R(() => {
      document.addEventListener("mousedown", L);
    }), x(() => {
      document.removeEventListener("mousedown", L);
    }), (i, c) => (r(), o("form", {
      onSubmit: c[3] || (c[3] = f(() => {
      }, ["prevent"])),
      class: "smart-select-form"
    }, [
      u("div", E, [
        b(u("input", {
          ref_key: "inputRef",
          ref: I,
          type: "text",
          readonly: "",
          placeholder: e.labelPlaceholder,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => s.value = d),
          onClick: D,
          class: "smart-select-input"
        }, null, 8, N), [
          [y, s.value]
        ]),
        s.value ? (r(), o("button", {
          key: 0,
          type: "button",
          onClick: V,
          "aria-label": "حذف انتخاب",
          class: "smart-select-clear-btn"
        }, " × ")) : p("", !0)
      ]),
      n.value ? (r(), o("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: k,
        class: "smart-select-dropdown"
      }, [
        b(u("input", {
          type: "search",
          "onUpdate:modelValue": c[1] || (c[1] = (d) => a.value = d),
          placeholder: e.labelSearch,
          class: "smart-select-search"
        }, null, 8, U), [
          [y, a.value]
        ]),
        u("ul", {
          class: "smart-select-list",
          onMousedown: c[2] || (c[2] = f(() => {
          }, ["prevent"]))
        }, [
          w().length === 0 ? (r(), o("li", P, S(e.labelNoItems), 1)) : p("", !0),
          (r(!0), o(g, null, C(w(), (d, O) => (r(), o("li", {
            key: O,
            class: "smart-select-item"
          }, [
            u("button", {
              type: "button",
              class: "smart-select-item-btn",
              onMousedown: f((J) => _(d), ["prevent"])
            }, S(d[e.keyLabel]), 41, B)
          ]))), 128))
        ], 32)
      ], 512)) : p("", !0)
    ], 32));
  }
}, Q = /* @__PURE__ */ M(j, [["__scopeId", "data-v-2ffade35"]]), A = {
  name: "SmartSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    keyLabel: {
      type: String,
      default: "title"
    },
    labelPlaceholder: {
      type: String,
      default: "لطفا یک گزینه انتخاب کنید"
    },
    labelSearch: {
      type: String,
      default: "جستجو ..."
    },
    labelNoItems: {
      type: String,
      default: "ایتمی برای نمایش وجود ندارد"
    },
    valueDefault: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showSubMenu: !1,
      searchItem: "",
      labelItem: this.valueDefault ? this.valueDefault[this.keyLabel] : "",
      valueItem: this.valueDefault
    };
  },
  computed: {
    filteredOptions() {
      return this.searchItem ? this.options.filter(
        (e) => e[this.keyLabel].toLowerCase().includes(this.searchItem.toLowerCase())
      ) : this.options;
    }
  },
  methods: {
    setValueInput(e) {
      this.labelItem = e[this.keyLabel], this.valueItem = e, this.searchItem = "", this.$emit("selected", e), this.showSubMenu = !1;
    },
    removeValueSelectItem() {
      this.labelItem = "", this.searchItem = "", this.valueItem = null, this.$emit("remove", null), this.showSubMenu = !1;
    },
    onClickInput() {
      this.showSubMenu = !0;
    },
    onClickOutside(e) {
      !this.$refs.inputRef.contains(e.target) && (!this.$refs.dropdownRef || !this.$refs.dropdownRef.contains(e.target)) && (this.showSubMenu = !1);
    }
  },
  mounted() {
    document.addEventListener("mousedown", this.onClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("mousedown", this.onClickOutside);
  }
}, F = { class: "smart-select-input-wrapper" }, T = ["placeholder"], $ = {
  key: 0,
  ref: "dropdownRef",
  class: "smart-select-dropdown"
}, q = ["placeholder"], z = {
  key: 0,
  class: "no-items"
}, G = ["onMousedown"];
function H(e, t, l, v, n, a) {
  return r(), o("form", {
    onSubmit: t[5] || (t[5] = f(() => {
    }, ["prevent"])),
    class: "smart-select-form"
  }, [
    u("div", F, [
      b(u("input", {
        ref: "inputRef",
        type: "text",
        readonly: "",
        placeholder: l.labelPlaceholder,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => n.labelItem = s),
        onClick: t[1] || (t[1] = (...s) => a.onClickInput && a.onClickInput(...s)),
        class: "smart-select-input"
      }, null, 8, T), [
        [y, n.labelItem]
      ]),
      n.labelItem ? (r(), o("button", {
        key: 0,
        type: "button",
        onClick: t[2] || (t[2] = (...s) => a.removeValueSelectItem && a.removeValueSelectItem(...s)),
        "aria-label": "حذف انتخاب",
        class: "smart-select-clear-btn"
      }, " × ")) : p("", !0)
    ]),
    n.showSubMenu ? (r(), o("div", $, [
      b(u("input", {
        type: "search",
        "onUpdate:modelValue": t[3] || (t[3] = (s) => n.searchItem = s),
        placeholder: l.labelSearch,
        class: "smart-select-search"
      }, null, 8, q), [
        [y, n.searchItem]
      ]),
      u("ul", {
        class: "smart-select-list",
        onMousedown: t[4] || (t[4] = f(() => {
        }, ["prevent"]))
      }, [
        a.filteredOptions.length === 0 ? (r(), o("li", z, S(l.labelNoItems), 1)) : p("", !0),
        (r(!0), o(g, null, C(a.filteredOptions, (s, h) => (r(), o("li", {
          key: h,
          class: "smart-select-item"
        }, [
          u("button", {
            type: "button",
            class: "smart-select-item-btn",
            onMousedown: f((I) => a.setValueInput(s), ["prevent"])
          }, S(s[l.keyLabel]), 41, G)
        ]))), 128))
      ], 32)
    ], 512)) : p("", !0)
  ], 32);
}
const W = /* @__PURE__ */ M(A, [["render", H], ["__scopeId", "data-v-f262eb8e"]]);
export {
  W as SmartSelectVue2,
  Q as SmartSelectVue3
};

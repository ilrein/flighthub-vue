import { defineCustomElement } from "vue";

import ISidebar from "./components/ISidebar.vue";

export { ISidebar };

export function register() {
  customElements.define("i-sidebar", defineCustomElement(ISidebar));
}
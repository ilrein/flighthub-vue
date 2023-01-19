import { defineCustomElement } from "vue";

import './assets/main.css'

import ISidebar from "./components/ISidebar.ce.vue";

export { ISidebar };

export function register() {
  customElements.define("i-sidebar", defineCustomElement(ISidebar));
}
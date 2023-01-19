import { defineCustomElement } from "vue";

import './assets/main.css'

import _ISidebar from "./components/ISidebar.ce.vue";

export const ISidebar = defineCustomElement(_ISidebar);

export function register() {
  customElements.define("i-sidebar", defineCustomElement(_ISidebar));
}
import { defineCustomElement } from "vue";

import './assets/main.css'

import _PrecogSalesDisplay from "./features/PrecogSalesDisplay.ce.vue";

export const PrecogSalesDisplay = defineCustomElement(_PrecogSalesDisplay);

export function register() {
  customElements.define("precog-sales-display", defineCustomElement(_PrecogSalesDisplay));
}
import Vue from "vue";
import Component from "vue-class-component";

import { Navigation } from "../../components/navigation/Navigation";
import template from "./Main.html";

/**
 * Main application components
 * Includes base layout
 *
 * @export
 * @class Main
 * @extends {Vue}
 */
@Component({ name: "Main", template, components: { Navigation } })
export class Main extends Vue {}

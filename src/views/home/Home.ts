import Vue from "vue";
import Component from "vue-class-component";

import { Login } from "../../components/login/Login";
import template from "./Home.html";

/**
 * Home component
 *
 * @export
 * @class Home
 * @extends {Vue}
 */
@Component({ name: "Home", template, components: { Login } })
export class Home extends Vue {}

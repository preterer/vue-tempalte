import Vue from "vue";
import Component from "vue-class-component";

/**
 * Renders route view
 *
 * @export
 * @class RouteContainer
 * @extends {Vue}
 */
@Component({ template: "<router-view />" })
export class RouteContainer extends Vue {}

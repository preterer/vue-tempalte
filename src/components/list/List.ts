import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { EntityList } from "@preterer/resource";

import { Sorting } from "#/interfaces/sorting";
import { TableColumn } from "#/interfaces/tableColumn";
import { Heading } from "./heading/Heading";
import template from "./List.html";

/**
 * Displays list of items
 *
 * @export
 * @class List
 * @extends {Vue}
 * @template EntityType
 */
@Component({ name: "List", template, components: { Heading } })
export class List<EntityType> extends Vue {
  /**
   * List data
   *
   * @type {EntityList<any>}
   * @memberof List
   */
  @Prop({ required: true, type: Object })
  public data!: EntityList<EntityType>;

  /**
   * List of headers
   *
   * @type {TableColumn[]}
   * @memberof List
   */
  @Prop({ required: true, type: Array })
  public columns!: TableColumn<EntityType>[];

  /**
   * Current sorting
   *
   * @type {Sorting}
   * @memberof List
   */
  @Prop({ required: false, type: Object })
  public sorting!: Sorting;
}

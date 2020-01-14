import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

import { Sorting } from "#/interfaces/sorting";
import { TableColumn } from "#/interfaces/tableColumn";
import template from "./Heading.html";

/**
 * Header of a table
 *
 * @export
 * @class TableHead
 * @extends {Vue}
 * @template EntityType
 */
@Component({ name: "Heading", template })
export class Heading<EntityType> extends Vue {
  /**
   * Column of the header
   *
   * @type {TableColumn<EntityType>}
   * @memberof TableHead
   */
  @Prop({ required: true, type: Object })
  public column!: TableColumn<EntityType>;

  /**
   * Current sorting
   *
   * @type {Sorting}
   * @memberof TableHead
   */
  @Prop({ required: true, type: Object })
  public sorting!: Sorting;

  /**
   * Sorts the list
   *
   * @param {TableColumn<EntityType>} column
   * @memberof List
   */
  public sort(column: TableColumn<EntityType>): void {
    if (column.sort) {
      this.$emit("sort", {
        order: column.sort,
        desc: this.isAscSorted(column)
      });
    }
  }

  /**
   * Checks if current sorting is ascending by given column
   *
   * @private
   * @param {TableColumn<EntityType>} column
   * @returns
   * @memberof List
   */
  public isAscSorted(column: TableColumn<EntityType>): boolean {
    return this.sorting?.order === column.sort && !this.sorting.desc;
  }

  /**
   * Class of the sorting icon for given column
   *
   * @param {TableColumn<EntityType>} column
   * @returns {string}
   * @memberof List
   */
  public sortIconClass(column: TableColumn<EntityType>): string {
    if (this.isAscSorted(column)) {
      return "fa-chevron-down";
    }
    return "fa-chevron-up";
  }
}

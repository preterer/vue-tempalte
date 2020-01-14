/**
 * List sorting data
 *
 * @export
 * @interface Sorting
 */
export interface Sorting {
  /**
   * Current order
   *
   * @type {string}
   * @memberof Sorting
   */
  order: string;

  /**
   * Is sorted descending
   *
   * @type {boolean}
   * @memberof Sorting
   */
  desc: boolean;
}

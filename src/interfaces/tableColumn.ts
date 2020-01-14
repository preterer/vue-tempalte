/**
 * Table column data
 *
 * @export
 * @interface TableColumn
 * @template T
 */
export interface TableColumn<T> {
  /**
   * Heading title of the column
   *
   * @type {string}
   * @memberof TableColumn
   */
  heading: string;

  /**
   * Sort field name
   *
   * @type {string}
   * @memberof TableColumn
   */
  sort?: string;

  /**
   * Column width
   *
   * @type {string}
   * @memberof TableColumn
   */
  width?: string;

  /**
   * CSS classes of column heading
   *
   * @type {string}
   * @memberof TableColumn
   */
  headingClass?: string;

  /**
   * CSS classess of column in row
   *
   * @type {string}
   * @memberof TableColumn
   */
  rowClass?: string;

  /**
   * Mapper of item to value
   *
   * @memberof TableColumn
   */
  valueGetter: (item: T) => string;
}

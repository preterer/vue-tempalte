/**
 * Gets object path
 *
 * @export
 * @template T
 * @param {*} object
 * @param {(string[] | string)} path
 * @returns {T}
 */
export function getPath<T = any>(object: any, path: string[] | string): T {
  if (typeof path === "string") {
    path = path.split(".");
  }
  return path.reduce((obj, key) => obj && obj[key], object);
}

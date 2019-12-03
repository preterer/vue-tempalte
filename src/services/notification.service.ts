import Vue from "vue";

/**
 * Notifications service
 *
 * @export
 * @class NotificationService
 */
export class NotificationService {
  /**
   * Creates a notification of given type
   *
   * @param {string} type
   * @param {string} [title]
   * @param {string} [text]
   * @memberof NotificationService
   */
  public notify(type: string, title?: string, text?: string): void {
    Vue.notify({ text, title, type });
  }

  /**
   * Creates a success notification
   *
   * @param {string} [title]
   * @param {string} [text]
   * @memberof NotificationService
   */
  public success(title?: string, text?: string): void {
    this.notify("success", title, text);
  }

  /**
   * Creates an error notification
   *
   * @param {string} [title]
   * @param {string} [text]
   * @memberof NotificationService
   */
  public error(title?: string, text?: string): void {
    this.notify("error", title, text);
  }

  /**
   * Creates a warning notification
   *
   * @param {string} [title]
   * @param {string} [text]
   * @memberof NotificationService
   */
  public warn(title?: string, text?: string): void {
    this.notify("warning", title, text);
  }
}

export const notificationService = new NotificationService();

import { AxiosError } from "axios";

import { notificationService } from "./notification.service";

/**
 * Error handling service
 *
 * @export
 * @class ErrorHandlerService
 */
export class ErrorHandlerService {
  /**
   * Handles errors
   *
   * @param {*} error
   * @memberof ErrorHandlerService
   */
  public handle(error: any): void {
    if (error.response) {
      return this.handleHttpError(error);
    }
    notificationService.error(error.message);
  }

  /**
   * Handles axios HTTP error
   *
   * @private
   * @param {AxiosError} error
   * @memberof ErrorHandlerService
   */
  private handleHttpError(error: AxiosError): void {
    notificationService.error(error.response && error.response.data);
  }
}

export const errorHandlerService = new ErrorHandlerService();

export const handleError = errorHandlerService.handle.bind(errorHandlerService);

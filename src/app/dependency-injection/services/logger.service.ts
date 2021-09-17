import { Injectable } from '@angular/core';
import { ILogger } from '../interfaces/logger.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {

  constructor() { }

  public prefix: string = 'Logger Service';
  public log (message: string): string {
    return `${this.prefix}-${message}`;
  }

}

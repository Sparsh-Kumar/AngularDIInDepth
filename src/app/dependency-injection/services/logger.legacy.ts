

import { ILogger } from "../interfaces/logger.interface";

export const LegacyLogger: ILogger = {
    prefix: 'Legacy Logger',
    log (message: string): string {
        return `${this.prefix}-Legacy-${message}`;
    }
}
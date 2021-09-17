
import { InjectionToken } from "@angular/core";

export interface AppConfig {
    experimentalEnabled: boolean
}

export const APP_CONFIG = new InjectionToken <AppConfig> ('mytestvalue', {

    factory: () => (
        {
            experimentalEnabled: false
        }
    )

});
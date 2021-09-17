
import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { ExperimentalloggerService } from '../services/experimentallogger.service';
import { AppConfig, APP_CONFIG } from 'src/app/config.token';

@Component({
  selector: 'app-use-class',
  templateUrl: './use-class.component.html',
  styleUrls: ['./use-class.component.css'],
  providers: [{
    // provide: LoggerService, useClass: ExperimentalloggerService

    // provide: LoggerService, useExisting: ExperimentalloggerService
    /*
      if we use useExisting, we tell angular not to create the new instance,
      but use the already instantiated object
      for example
    */ 

    //provide: LoggerService, useValue: LegacyLogger

    /*
      If we use useValue, we tell angular to use the value [may be an interface or constant] of Legacy Logger
      and not create an instance of the interface or constant, as it can only create the instance for a class
    */

    provide: LoggerService, useFactory: (isInProd: AppConfig) => {
      return isInProd.experimentalEnabled ? new LoggerService () : new ExperimentalloggerService ();
    },
    deps: [APP_CONFIG]

    /*
      Always use useFactory with Injection tokens, injection tokens are simple to make, 
      please see the file config.token.ts

      1. UseFactory is used mainly in those cases in which we need to switch b/w some services based on some "configuration"
      2. The "configuration" should be specified in the "Injection Tokens".
      3. As we can see, Logger service will be a new instance of LoggerService if "isInProd.experimentalEnabled === true" and
      4. LoggerService will be a new instance of ExperimentalloggerService, if "isInProd.experimentalEnabled === false"
    */

  }]
})
export class UseClassComponent implements OnInit {

  constructor(private _logger: LoggerService, private _experimentalLogger: ExperimentalloggerService) { }

  public message: string = '';
  ngOnInit(): void {
    this.getMessage ();
  }

  getMessage (): void {
    this.message = this._logger.log ('Custom Message');
  }

  checkValues () {
    return this._logger === this._experimentalLogger;
  }


}

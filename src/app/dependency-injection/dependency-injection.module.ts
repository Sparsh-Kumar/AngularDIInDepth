import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { DependencyInjectionRoutingModule } from './dependency-injection-routing.module';
import { UseClassComponent } from './use-class/use-class.component';

@NgModule({
  declarations: [
    DependencyInjectionComponent,
    UseClassComponent
  ],
  imports: [
    CommonModule,
    DependencyInjectionRoutingModule
  ],
})
export class DependencyInjectionModule { }

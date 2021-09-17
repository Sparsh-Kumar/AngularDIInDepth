import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { UseClassComponent } from './use-class/use-class.component';

const routes: Routes = [
  {
    path: '',
    component: DependencyInjectionComponent,
    children: [
      { path: '', component: UseClassComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependencyInjectionRoutingModule { }

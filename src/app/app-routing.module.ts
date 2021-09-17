import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/useClass', pathMatch: 'full' },
  { path: 'useClass', loadChildren: () => import ('./dependency-injection/dependency-injection.module').then (m => m.DependencyInjectionModule) },
  { path: '**', redirectTo: '/useClass', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

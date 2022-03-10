import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './pages/code/code.component';

const routes: Routes = [
  {path: "code", component: CodeComponent, },
  {path: "**", redirectTo: '', pathMatch: 'full', }, //Cuando una ruta no exista, lo envía a home
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

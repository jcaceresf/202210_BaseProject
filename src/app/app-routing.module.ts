import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantasListaComponent } from './plantas/plantas-lista/plantas-lista.component';

const routes: Routes = [
  { path: '', component: PlantasListaComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

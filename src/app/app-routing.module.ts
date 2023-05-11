import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCandidatComponent } from './Candidat/edit-candidat/edit-candidat.component';


const routes: Routes = [
  { path: 'editcomponent/:id', component: EditCandidatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

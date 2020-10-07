import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionComponent } from './components/position/position.component';
import { TesteComponent } from './components/teste/teste.component';

const routes: Routes = [
 
    { path: 'position', component: PositionComponent },
    { path: 'teste', component: TesteComponent },
   // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { AboutComponent } from './about/about.component';
import { ExSearchComponent } from './ex-search/ex-search.component';

const routes: Routes = [
   { path: '', redirectTo: '/exercises', pathMatch: 'full' },
   { path: 'exercises', component: ExercisesComponent },
   { path: 'exercise/:id', component: ExerciseComponent },
   { path: 'about', component: AboutComponent },
   { path: 'search', component: ExSearchComponent }
]
@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule {
}

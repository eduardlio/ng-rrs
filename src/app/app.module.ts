import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { ExerciseService } from './exercise.service';
import { ExSearchComponent } from './ex-search/ex-search.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AboutComponent } from './about/about.component';
import { DoneListComponent } from './done-list/done-list.component';

@NgModule({
   declarations: [
      AppComponent,
      ExerciseComponent,
      ExercisesComponent,
      ExSearchComponent,
      AboutComponent,
      DoneListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(
         InMemoryDataService, { dataEncapsulation: false }
      ),
      BrowserAnimationsModule
   ],
   providers: [
      MessageService, 
      ExerciseService,
      InMemoryDataService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }

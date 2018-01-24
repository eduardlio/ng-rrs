import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

import { EXERCISES } from './exercises';
import { Exercise } from './exercise';

@Injectable()
export class ExerciseService {


   private exerciseUrl= 'api/exercises';
   private length: number;
   constructor(
      private http: HttpClient
   ) { }
   getExercises(): Observable<Exercise[]> {
      return this.http.get<Exercise[]>(this.exerciseUrl)
      .pipe(
         catchError(this.handleError('getExercises', []))
      );
   }
   updateExercise(exercise: Exercise): Observable<any>{
      return this.http.put<Exercise>(
         this.exerciseUrl, 
         exercise, 
         {headers : new HttpHeaders(
            {'Content-Type': 'application/json'})}
      ).pipe(
         catchError(this.handleError<any>(`updateExercise`))
      );
   }
   getExercise(id: number): Observable<Exercise>{
      this.checkLength();
      if ( id < 0 ){
         id = this.length -1;
      } else if ( id > this.length -1 ){
         id = 0;
      } else {
         id = id;
      }
      const url = `${this.exerciseUrl}/${id}`;
      return this.http.get<Exercise>(url)
      .pipe(
         catchError(this.handleError<Exercise>(`getExercise id=${id}`))
      );
   }

   handleError<T>(operation='operation', result?: T){
      return (error: any): Observable<T> => {
         console.error(error);
         //         this.log(`${operation} failed: ${error.message}`);
         return of(result as T);
      } 
   }

   getRandomId(){
      var rand = Math.floor(Math.random()* this.length);
      return rand;
   }
   getLastId(): number {
      this.checkLength();
      return this.length -1;
   }
   searchExercises(term: string): Observable<Exercise[]>{
      if(!term.trim()){
         return of([]);
      }
      return this.http.get<Exercise[]>(`api/exercises/?name=${term}`)
      .pipe(
         catchError(this.handleError<Exercise[]>(`searchExercises`, []))
      );
   }
   checkLength(){
      this.length = EXERCISES.length;
   }
}

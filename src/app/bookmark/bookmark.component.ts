import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
   selector: 'app-bookmark',
   templateUrl: './bookmark.component.html',
   styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

   exercises: Exercise[];
   constructor(private exerciseService:ExerciseService) { }

   ngOnInit() {
      this.getExercises();
   }
   getExercises(){
      this.exerciseService.getExercises()
         .subscribe( exercises => 
            this.exercises = exercises.filter (exercise => exercise.bookmarked)
         )
   }

}

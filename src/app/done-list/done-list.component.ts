import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

   exercises: Exercise[];
  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
     this.getExercises();
  }
   getExercises(){
      this.exerciseService.getExercises()
         .subscribe( exercises => 
            this.exercises = exercises.filter( exercise => exercise.done )
         );
   }
}

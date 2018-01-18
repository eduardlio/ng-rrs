import { Input, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { 
   trigger,
   state,
   style,
   transition,
   animate, keyframes} from '@angular/animations';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
declare var jquery:  any;
declare var $:       any;

@Component({
   selector: 'app-exercise',
   templateUrl: './exercise.component.html',
   styleUrls: ['./exercise.component.css'],
   animations: [
      trigger('marked',[
         state('done', style({
            content:'DONE'
         })),
         state('undone', style({
            content: 'Mark as done'
         })),
         transition('done <=> undone', animate('200ms linear'))
      ])
   ]
})
export class ExerciseComponent implements OnInit {

   @Input() exercise: Exercise;

   state: string= "done";
   length: number;
   constructor(
      private exerciseService: ExerciseService,
      private location: Location,
      private route: ActivatedRoute
   ) { }

   ngOnInit() {
      this.getExercise();
   }
   animate(){

      if(this.state==="done"){
         $("#done").css(
            { 'background-color': 'green',
               'color': 'white' }
         );
      } else {
         $("#done").css(
            {
               'background-color': 'white',
               'color': 'green'
            }
         );
      }
   }
   save(){
      this.state = (this.state === "done" ? "undone" : "done");
      this.exercise.done = !this.exercise.done;
      this.exerciseService.updateExercise(this.exercise).subscribe(
         () => this.log(`marked ${this.exercise.name} as done`));
   }
   log(message: string): void{
      console.log(message);
   }

   getExercise(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.exerciseService.getExercise(id)
      .subscribe(exercise => this.exercise = exercise);
      this.length =this.exerciseService.getLastId();
      this.state = (this.exercise.done ? "done" : "undone");
   }
   setExercise(id: number){
      this.exerciseService.getExercise(id)
         .subscribe( exercise => this.exercise = exercise);
   }
   prev(): number{
      const id = this.exercise.id === 0 ? this.length : this.exercise.id -1; 
      this.location.go("/exercise/"+id, "");
      return id;
   }
   next(): number{
      const id = this.exercise.id === this.length ? 0 : this.exercise.id + 1;
      this.location.go("/exercise/"+id, "");
      return id;
   }
   random(): number{
      var rand= Math.floor(Math.random() * this.length);
      this.location.go("/exercise/"+rand, "");
      return rand;
   }
}

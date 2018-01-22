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

   length: number;
   constructor(
      private exerciseService: ExerciseService,
      private location: Location,
      private route: ActivatedRoute
   ) { }

   ngOnInit() {
      this.getExercise();
   }
   colorCheck(){
      console.log(`checking for ${this.exercise.name}`);
      console.log(`Done is ${this.exercise.done}`)
      var elem = document.getElementById("done");
      if(this.exercise.done){
         elem.classList.add("done");
         elem.classList.remove("undone");
         elem.style["background-color"] = "green";
         elem.style["color"] = "white";
      } else {
         elem.classList.add("undone");
         elem.classList.remove("done");
         elem.style["background-color"] = "white";
         elem.style["color"] = "green";
      }
   }
   toggleDone(){
      // toggle the exercise done status
      this.exercise.done = !this.exercise.done;
      // toggle the class
      this.colorCheck();
      this.exerciseService.updateExercise(this.exercise).subscribe(
         () => this.log(`${this.exercise.name} done is now ${this.exercise.done}`));
   }

   log(message: string): void{
      console.log(message);
   }

   getExercise(): void{
      const id = +this.route.snapshot.paramMap.get('id');
      this.exerciseService.getExercise(id)
      .subscribe(exercise => this.exercise = exercise);
      this.length =this.exerciseService.getLastId();
      this.colorCheck();
   }
   setExercise(id: number){
      this.exerciseService.getExercise(id)
         .subscribe( exercise => this.exercise = exercise);
      this.colorCheck()
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

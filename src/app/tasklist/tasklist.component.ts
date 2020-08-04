import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../services/task';
import { Response } from '../services/response';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


import { trigger, keyframes, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css'],
  exportAs:'NgForm',
  animations:[
   trigger("moveInLeft",[
      transition("void=> *",[style({transform:"translateX(300px)"}),
        animate(200,keyframes([
         style({transform:"translateX(300px)"}),
         style({transform:"translateX(0)"})
 
          ]))]),


          transition("*=>void",[style({transform:"translateX(0px)"}),
        animate(100,keyframes([
         style({transform:"translateX(0px)"}),
         style({transform:"translateX(300px)"})
 
          ]))])    
     
   	])

  ]
})
export class TaskListComponent implements OnInit {
    task = {} as Task;
    tasks: Task[];
    statusIn = "Pendente";

    constructor(private taskService: TaskService,
                private router:Router) {}

    ngOnInit() {
        this.getTask();
      }
      getTask() {
        this.taskService.getTask().subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      }

      saveTask(form) {
        console.log(form);
        if (this.task.codigo !== undefined) {
          console.log(form);
          this.taskService.updateTask(this.task).subscribe(() => {
            this.cleanForm(form);
          });
        } else {
          console.log(form);
          this.taskService.saveTask(this.task).subscribe(() => {
            this.cleanForm(form);
          });
        }
      }

    
      deleteTask(task: Task) {
         this.taskService.deleteTask(task).subscribe(() => {
         this.getTask();
    });
  }

    updateTask(task: Task){
      this.taskService.updateTask(task).subscribe(() =>{
        this.getTask();
      })
    }

        // limpa o formulario
  cleanForm(form: NgForm) {
    this.getTask();
    form.resetForm();
    this.task = {} as Task;
  }
      }







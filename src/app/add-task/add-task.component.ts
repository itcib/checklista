import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../models/task';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addForm: FormGroup;


  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    this.addForm = new FormGroup({
      taskName: new FormArray([new FormControl(null, Validators.required)])
    });
  }

  add() {
    const task: Task = ({name: '', created: new Date().toLocaleString(), isDone: false});
    this.tasksService.add(task);
    // this.newTask = '';
  }

  addField() {
    const arr = <FormArray>this.addForm.get('taskName');
    arr.push(new FormControl(null, Validators.required));
  }

}

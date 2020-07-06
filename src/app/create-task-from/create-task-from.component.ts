import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Task } from '../task/task';
import { ManageTaskService } from '../manage-task/manage-task.service';

@Component({
  selector: 'app-create-task-from',
  templateUrl: './create-task-from.component.html',
  styleUrls: ['./create-task-from.component.scss']
})
export class CreateTaskFromComponent implements OnInit {

  @Input() config: any;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  users = ['local-user', 'user1', 'user2', 'user3', 'user4', 'user5', 'user6'];

  model = new Task(100, '', '', 'local-user' );

  constructor(private manageTaskService: ManageTaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    alert(JSON.stringify(this.model));
    this.manageTaskService.addNewTask(this.model);
    this.callback.emit();
  }

  onCancel() {
    this.callback.emit();
  }

  newTask() {
    this.model = new Task(100, '', '', 'local-user');
  }

}

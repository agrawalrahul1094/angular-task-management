import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITaskStatus } from '../manage-task/manage-task.model';
import { ManageTaskService } from '../manage-task/manage-task.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-card-host',
  templateUrl: './card-host.component.html',
  styleUrls: ['./card-host.component.scss']
})
export class CardHostComponent implements OnInit {
  @Input() config: ITaskStatus;

  @Output() refreshBoard: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private manageTaskService: ManageTaskService) { }

  ngOnInit() {
  }

  tracktask(index, element) {
    return element.id;
  }

  onTaskDrop(event: CdkDragDrop<[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.refreshBoard.emit(true);
  }

  deleteTask(task: Task, index: number) {
    const response = confirm('Are you sure, you want to delete this task');
    if (response) {
      this.config.tasks.splice(index, 1);
      // this.manageTaskService.deleteTask(task);
      this.refreshBoard.emit(true);
    }
  }

}

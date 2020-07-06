import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ManageTaskService } from '../manage-task/manage-task.service';
import { Task } from '../task/task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() config: Task;

  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private manageTaskService: ManageTaskService) { }

  ngOnInit() {
  }

  deleteCard() {
    this.delete.emit();
  }

}

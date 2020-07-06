import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { ITaskStatus } from './manage-task.model';
import { ManageTaskService } from './manage-task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-task',
  templateUrl: './manage-task.component.html',
  styleUrls: ['./manage-task.component.scss']
})
export class ManageTaskComponent implements OnInit, OnDestroy {

  config: ITaskStatus[];
  private streamSubscription = new Subscription();

  peopleChip = {
    icon: 'icon-icomoon-user-o',
    text: '6 people',
    backgroundColor: 'whitesmoke',
    textColor: 'gray'
  };

  timeChip = {
    icon: 'icon-icomoon-stopwatch',
    text: '2 days left',
    backgroundColor: '#ffdd79d9',
    textColor: '#ff8d00'
  };

  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) popupContainerRef: ViewContainerRef;
  @ViewChild('popupTemplate', { read: TemplateRef, static: true }) popupTemplateRef: TemplateRef<any>;

  constructor(private manageTaskService: ManageTaskService) { }

  ngOnInit() {
    this.initConfig();
  }

  initConfig() {
    this.manageTaskService.initTaskBoard();
    this.getTaskBoard();
  }

  getTaskBoard() {
    this.config = this.manageTaskService.getTaskBoard();
  }

  trackSection(index, element) {
    return element.id;
  }

  refreshTaskBoard(refresh: boolean) {
    if (refresh) {
      this.manageTaskService.updateTaskBoard();
    }
  }

  openPopup(e: MouseEvent) {
    this.popupContainerRef.clear();
    this.popupContainerRef.createEmbeddedView(this.popupTemplateRef);
  }

  closePopup() {
    this.popupContainerRef.clear();
  }

  ngOnDestroy() {
    this.streamSubscription.unsubscribe();
  }

}

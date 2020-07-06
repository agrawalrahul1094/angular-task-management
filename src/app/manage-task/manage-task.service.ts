import { Injectable } from '@angular/core';
import { Task } from '../task/task';
import { ITaskStatus, taskBoardConfig } from './manage-task.model';
import { BaseService } from '../services/base.service';

const LOCAL_STORAGE_TASK_BOARD_KEY = 'dummyTaskManagement';

@Injectable()
export class ManageTaskService {

  taskBoardData: ITaskStatus[];

  constructor(private baseService: BaseService) { }

  initTaskBoard() {
    this.taskBoardData = JSON.parse(this.baseService.getLocalData(LOCAL_STORAGE_TASK_BOARD_KEY));
    // check if data is not available in localStorage
    if (this.taskBoardData === null) {
      this.taskBoardData = taskBoardConfig;
      this.updateTaskBoard();
    }
  }

  getTaskBoard(): ITaskStatus[] {
    return this.taskBoardData;
  }

  updateTaskBoard() {
    this.baseService.setLocalData(LOCAL_STORAGE_TASK_BOARD_KEY, this.taskBoardData);
  }

  addNewTask(task: Task) {
    this.taskBoardData[0].tasks.push(task);
    this.updateTaskBoard();
  }

  deleteTask(task: Task) {
    this.updateTaskBoard();
  }
}

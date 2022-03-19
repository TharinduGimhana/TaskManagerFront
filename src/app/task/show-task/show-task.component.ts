import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskApiService } from 'src/app/task-api.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  taskList$!:Observable<any[]>;
  taskTypeList$!:Observable<any[]>;
  taskTypeList:any = [];

  taskTypesMap:Map<number, string> = new Map()


  constructor(private _service : TaskApiService) { }

  ngOnInit(): void {
    this.taskList$ = this._service.getTasksList();
    this.taskTypeList$ = this._service.getTaskTypesList();
    this.refreshTaskTypesMap();
  }


  modalTitle:string = '';
  activateAddEditTaskComponent:boolean = false;
  task:any;

  modalAdd() {
    this.task = {
      id:0,
      status:null,
      comments:null,
      taskTypeId:null
    }
    this.modalTitle = "Add Task";
    this.activateAddEditTaskComponent = true;
  }

  modalEdit(item:any) {
    this.task = item;
    this.modalTitle = "Edit Task";
    this.activateAddEditTaskComponent = true;
  }

  delete(item:any) {
    if(confirm(`Are you sure you want to delete task ${item.id}`)) {
      this._service.deleteTask(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.taskList$ = this._service.getTasksList();
      })
    }
  }

  modalClose() {
    this.activateAddEditTaskComponent = false;
    this.taskList$ = this._service.getTasksList();
  }

  refreshTaskTypesMap() {
    this._service.getTaskTypesList().subscribe(data => {
      this.taskTypeList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.taskTypesMap.set(this.taskTypeList[i].id, this.taskTypeList[i].taskName);
      }
    })
  }

}

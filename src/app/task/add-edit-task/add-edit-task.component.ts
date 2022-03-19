import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TaskApiService } from 'src/app/task-api.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  taskList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  taskTypesList$!: Observable<any[]>;

  constructor(private _service:TaskApiService) { }


  @Input() task:any;
  id: number = 0;
  status: string = "";
  comments: string = "";
  taskTypeId!: number;

  ngOnInit(): void {
    this.id = this.task.id;
    this.status = this.task.status;
    this.comments = this.task.comments;
    this.taskTypeId = this.task.taskTypeId;
    this.statusList$ = this._service.getTaskStatusList();
    this.taskList$ = this._service.getTasksList();
    this.taskTypesList$ = this._service.getTaskTypesList();
  }

  addTask() {
    var task = {
      status:this.status,
      comments:this.comments,
      taskTypeId:this.taskTypeId
    }
    this._service.addTask(task).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

  updateTask() {
    var task = {
      id: this.id,
      status:this.status,
      comments:this.comments,
      taskTypeId:this.taskTypeId
    }
    var id:number = this.id;
    this._service.updateTask(id,task).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}

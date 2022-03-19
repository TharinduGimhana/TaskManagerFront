import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {

  readonly taskApiUrl = "https://localhost:7284/api"

  constructor(private http : HttpClient) { }

  //Tasks

  getTasksList(): Observable<any[]>{
    return this.http.get<any>(this.taskApiUrl + '/tasks');
  }

  addTask(data : any){
    return this.http.post(this.taskApiUrl + '/tasks', data);
  }

  updateTask(id : number | string, data: any){
    return this.http.put(this.taskApiUrl + `/tasks/${id}`, data);
  }

  deleteTask(id : number | string){
    return this.http.delete(this.taskApiUrl + `/tasks/${id}`);
  }

  //Task Types

  getTaskTypesList(): Observable<any[]>{
    return this.http.get<any>(this.taskApiUrl + '/taskTypes');
  }

  addTaskType(data : any){
    return this.http.post(this.taskApiUrl + '/taskTypes', data);
  }

  updateTaskType(id : number | string, data: any){
    return this.http.put(this.taskApiUrl + `/taskTypes/${id}`, data);
  }

  deleteTaskType(id : number | string){
    return this.http.delete(this.taskApiUrl + `/taskTypes/${id}`);
  }

  //Status

  getTaskStatusList(): Observable<any[]>{
    return this.http.get<any>(this.taskApiUrl + '/status');
  }

  addStatus(data : any){
    return this.http.post(this.taskApiUrl + '/status', data);
  }

  updateStatus(id : number | string, data: any){
    return this.http.put(this.taskApiUrl + `/status/${id}`, data);
  }

  deleteStatus(id : number | string){
    return this.http.delete(this.taskApiUrl + `/status/${id}`);
  }

}

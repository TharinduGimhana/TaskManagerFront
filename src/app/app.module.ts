
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { ShowTaskComponent } from './task/show-task/show-task.component';
import { AddEditTaskComponent } from './task/add-edit-task/add-edit-task.component';

import { TaskApiService } from './task-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ShowTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

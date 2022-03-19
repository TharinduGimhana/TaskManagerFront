import { inject, TestBed } from '@angular/core/testing';

import { TaskApiService } from './task-api.service';

describe('TaskApiService', () => {
  let service: TaskApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have AddTask function',
  inject([TaskApiService], (service : TaskApiService) => {
    expect(service.addTask).toBeTruthy();
  }));

  it('should have getTasksList function',
  inject([TaskApiService], (service : TaskApiService) => {
    expect(service.getTasksList).toBeTruthy();
  }));

  it('should have deleteTask function',
  inject([TaskApiService], (service : TaskApiService) => {
    expect(service.deleteTask).toBeTruthy();
  }));

  it('should have updateTask function',
  inject([TaskApiService], (service : TaskApiService) => {
    expect(service.updateTask).toBeTruthy();
  }));
});

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private task: Task[] = [];


  constructor() { }
}

interface Task {
  value: string;
  date: Date;
  done?: boolean;
}

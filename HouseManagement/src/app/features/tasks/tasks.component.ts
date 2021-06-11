import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  loadedTasks: Task[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Task[]>("https://housemanagement-58c1d-default-rtdb.firebaseio.com/tasks.json")

      .subscribe(data => {
        this.loadedTasks = data;
        console.log(data); /// showing data - DELETE LATER
      })
  };
}

import { Component, OnInit } from '@angular/core';

import { Task } from '@app/models';
import { TaskService } from '@app/services';

import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks() {
    this.tasks = TASKS;
    // this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(id: number): void {
    this.taskService
      .deleteTask(id)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id != id))
      );
  }

  toggleReminder(task: Task): void {
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(() => this.fetchTasks());
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../../models/task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;

  @Input() task: Task = {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: false,
  };
  @Output() onDelete = new EventEmitter();
  @Output() toggleReminderEmt = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleDelete(id: number): void {
    this.onDelete.emit(id);
  }

  toggleReminder() {
    this.task.reminder = !this.task.reminder;
    this.toggleReminderEmt.emit(this.task);
  }
}

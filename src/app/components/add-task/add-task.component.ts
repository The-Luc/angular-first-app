import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;

  @Output() addTaskEmt = new EventEmitter<Task>();

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((v) => (this.showAddTask = v));
  }

  ngOnInit(): void {}

  onSubmit() {
    const task: Task = {
      id: Date.now(),
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    if (task.text === '') {
      alert('Task text must not be empty!');
      return;
    }

    this.addTaskEmt.emit(task);

    // clear input fields
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}

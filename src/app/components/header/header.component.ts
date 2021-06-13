import { Component, OnDestroy, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'Todo Tracker';
  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {}
  ngOnInit() {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((v) => (this.showAddTask = v));
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}

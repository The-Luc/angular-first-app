import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  COUNTDOWN_SEC = 5;
  countdown = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.countdown = this.COUNTDOWN_SEC;
    setInterval(() => this.countdown--, 1000);

    setTimeout(() => {
      this.router.navigate(['']);
    }, this.COUNTDOWN_SEC * 1000);
  }
}

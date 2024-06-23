import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { HomeButtonComponent } from '@app/shared/home-button/home-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIcon, HomeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "Manag'Air";

  constructor(public router: Router) {}
}

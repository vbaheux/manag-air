import { Component, Input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-card',
  standalone: true,
  imports: [RouterLink, MatAnchor, MatIcon],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.scss',
})
export class HomeCardComponent {
  @Input({ required: true }) route!: string;
  @Input({ required: true }) id!: number;
}

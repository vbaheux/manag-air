import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PiloteDto } from '@model/dto/pilote.dto';
import { AvionDto } from '@model/dto/avion.dto';
import { PilotesService } from '@api/pilotes.service';
import { AvionsService } from '@api/avions.service';
import { HomeCardComponent } from '@app/shared/home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HomeCardComponent, ScrollingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  pilotes: PiloteDto[] = [];
  avions: AvionDto[] = [];

  constructor(
    private pilotesService: PilotesService,
    private avionsService: AvionsService,
  ) {}

  getPilotes(): void {
    this.pilotesService
      .findAll()
      .subscribe((pilotes) => (this.pilotes = pilotes));
  }

  getAvions(): void {
    this.avionsService.findAll().subscribe((avions) => (this.avions = avions));
  }

  ngOnInit() {
    this.getPilotes();
    this.getAvions();
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroServiceService } from '../../services/hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroServiceService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from '../../services/hero-search.service';
import { Hero } from '../../hero';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.heroes = this.searchTerms
        .debounceTime(100)
        .distinctUntilChanged()
        .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
        .catch(error => {
      // TODO: add real error handling
      console.log(error);
      return Observable.of<Hero[]>([]);
    });
  }

  gotoDetail(hero: Hero): void {
    const link = ['/details', hero.id];
    this.router.navigate(link);
  }

}

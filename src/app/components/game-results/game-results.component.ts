import { Component } from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { dataFakeResults } from 'src/app/data/dataFake';

@Component({
  selector: 'app-game-results-carousel',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css']
})
export class GameResultsCarouselComponent {
  private destroy$ = new Subject<void>();
  gameResults = dataFakeResults;

  activeSlideIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  startCarousel(): void {
    interval(3000)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.nextSlide();
      });
  }

  prevSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex - 1 + this.gameResults.length) % this.gameResults.length;
  }

  nextSlide(): void {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.gameResults.length;
  }
}

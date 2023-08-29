import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

export type TArticle = {
  id: string;
  title: string;
  description: string;
  photoCover: string;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: TArticle[] = [];
  lastArticle: TArticle | undefined ;
  lastThreeArticles: TArticle[] = [];

  constructor() { }

  ngOnInit(): void {
    this.articles = dataFake;
    this.lastArticle = this.getLastArticle();
    this.lastThreeArticles = this.getLastThreeArticles();
    console.log(this.lastThreeArticles)
  }

  getBigCardInformation() {

  }

  getLastArticle(): TArticle {
    return this.articles[this.articles.length -1];
  }

  getLastThreeArticles(): TArticle[] {
    const lastIndex = dataFake.length - 1;
    const lastThreeIndex = lastIndex - 3 >= 0 ? lastIndex - 3 : 0;
    return dataFake.slice(lastThreeIndex, lastIndex);
  }

}

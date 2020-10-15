import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Article } from '../articles';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  // article: Article = {
  //   id:1,
  //   content: "bbbbb"
  // }

  constructor() { }

  ngOnInit(): void {
  }
  @Output() itemForContent = new EventEmitter<string>();

  item: any;

  liste_article = [
    { id: 1, titre_article: 'Article 1' },
    { id: 2, titre_article: 'Article 2' },
    { id: 3, titre_article: 'Article 3' }
  ];
  // article:string[] = ['Article1: bla bla bla', 'Article2: bla bla bla', 'Article3: bla bla bla'];
  
  onChangeSelect(id) {
    // this.addNewItem(this.item);
    // this.itemForContent.emit(this.item);
    console.log(id)
    // console.log(this.item)
  }

  // addNewItem(value: string) {
  //   this.itemForContent.emit(value);
  // }
}

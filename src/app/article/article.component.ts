import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ArrayArticle } from '../mock-articles'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Output() eventArticle = new EventEmitter<string>();

  item: any = 1;
  arr = ArrayArticle;

  constructor() { }

  ngOnInit(): void {
  }
  
  onChangeSelect(id) {
    console.log(id)
    this.eventArticle.emit(id)
    
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../articles'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() articleAffichageContent: string;
  @Input() id_Article: number;
  

  // article: Article = {
  //   id:1,
  //   content: "bbbbb"
  // }

  // article:string[] = Article[];
  // article:string[] = ['Article1: bla bla bla', 'Aricle2: bla bla bla', 'Article3: bla bla bla'];

}

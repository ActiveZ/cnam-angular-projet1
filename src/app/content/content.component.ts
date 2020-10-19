import { Component, Input, OnInit } from '@angular/core';
import { ArrayArticle } from '../mock-articles'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  @Input() articleAffichageContent: string;
  @Input() idArticle: number;

  public arr = ArrayArticle

  constructor() { }

  ngOnInit(): void {
  }

}

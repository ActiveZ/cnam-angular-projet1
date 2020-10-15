import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet666';

  ngOnInit(): void {
    
  }

  // article:string[] = ['Article1: bla bla bla', 'Aricle2: bla bla bla', 'Article3: bla bla bla'];

  articleAffichage: any;
  id_article: number;

  // addArticle(articleString) {
  //   this.articleAffichage = articleString;
  // }

}

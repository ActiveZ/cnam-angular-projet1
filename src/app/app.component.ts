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

  idArticle: number;

  displayArticle(articleString) {
    this.idArticle = articleString;
    // console.log(articleString)
  }

}

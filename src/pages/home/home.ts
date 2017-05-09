import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  items = [];

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.splice(0, 0, this.items.length);
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.splice(0, 0, this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  scrollToTop(duration: number) {
    this.content.scrollToTop(duration);
  }


}

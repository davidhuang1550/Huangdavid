import { Component, OnInit } from '@angular/core';
import {Constant} from '../constants/Constant';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [   // :enter is alias to 'void => *'
        style({opacity: 0 }),
        animate(1000, style({opacity: 1 }))
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  private _quote = '';

  private _trait = '';
  /**
   * set the initial state of the quotes and traits
   */
  constructor() {
    this._quote = Constant.QUOTES[0];
    this._trait = Constant.TRAITS[0];

  }

  /**
   * this onit method will call the interval setting via timeout where an
   * asynchronous task will begin to change the qoute and the trait within
   * the specified interval defined.
   */
  ngOnInit() {
    let position = 1;
    const self = this;

    setInterval(() => {
      if (position === Constant.QUOTES.length - 1) {
        position = 0;
      }
      self._trait = Constant.TRAITS[position];
      self._quote = Constant.QUOTES[position];
      position++;

    }, Constant.INTERVAL_MILLISECONDS);
  }
  get trait(): string {
    return this._trait;
  }

  set trait(value: string) {
    this._trait = value;
  }
  get quote(): string {
    return this._quote;
  }

  set quote(value: string) {
    this._quote = value;
  }
}

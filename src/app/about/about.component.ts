import { Component, OnInit } from '@angular/core';
import {Constant} from '../constants/Constant';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private _aboutDesc: string;
  constructor() {
    this._aboutDesc = Constant.ABOUT_SECTION_ONE;
  }

  ngOnInit() {
  }

  get aboutDesc(): string {
    return this._aboutDesc;
  }

  set aboutDesc(value: string) {
    this._aboutDesc = value;
  }

}

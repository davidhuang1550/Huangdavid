import { Component, OnInit } from '@angular/core';
import { Constant } from '../constants/Constant';
import {WorkExperience} from '../model/WorkExperience';
import {ExperienceView} from './experience.view';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {


  /**
   * view layer, we need to hold data to rotate classes between left and right of the timeline.
   */
  private _experienceViewList: ExperienceView[] = [];

  /**
   * initialize experience list when object is created.
   */
  constructor() {
    this._experienceViewList = [] as ExperienceView[];
    let previousEmployment = '';
    let right = true;
    for ( let x = 0; x < Constant.EXPERIENCE.length; x++) {
      const workExperience = Constant.EXPERIENCE[x] as WorkExperience;
      // @ts-ignore
      right = ( previousEmployment === workExperience.employer) ? right : (right === false) ? true : false;
      this._experienceViewList[x] = new ExperienceView(right, workExperience, Array.from(workExperience.detailedDescription.keys()));

      previousEmployment = workExperience.employer;
    }
  }

  ngOnInit() {
  }
  get experienceViewList(): ExperienceView[] {
    return this._experienceViewList;
  }

  set experienceViewList(value: ExperienceView[]) {
    this._experienceViewList = value;
  }
}

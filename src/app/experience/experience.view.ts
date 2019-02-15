import {WorkExperience} from '../model/WorkExperience';

export class ExperienceView {
  private _right: boolean;
  private _experience: WorkExperience;
  private _descriptionKeys: string[];

  constructor(right: boolean, experience: WorkExperience, descriptonKeys: string[]) {
    this._experience = experience ;
    this._right = right;
    this._descriptionKeys = descriptonKeys;
  }

  get experience(): WorkExperience {
    return this._experience;
  }

  set experience(value: WorkExperience) {
    this._experience = value;
  }
  get right(): boolean {
    return this._right;
  }

  set right(value: boolean) {
    this._right = value;
  }
  get descriptionKeys(): string[] {
    return this._descriptionKeys;
  }

  set descriptionKeys(value: string[]) {
    this._descriptionKeys = value;
  }
}

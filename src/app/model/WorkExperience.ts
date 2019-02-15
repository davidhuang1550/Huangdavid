import {Experience} from './Experience';

export class WorkExperience extends Experience {
  private _employer: string;
  private _tools: string[];
  private _title: string;
  private _descriptions: string[];
  private _detailedDescription: Map<string, string[]>;

  constructor(startDate: string,
              endDate: string,
              location: string,
              employer: string,
              tools: string[],
              descriptions: string[],
              detailedDescription: Map<string, string[]>,
              title: string) {
    super(startDate, endDate, location);
    this._employer = employer;
    this._tools = tools;
    this._descriptions = descriptions;
    this._detailedDescription = detailedDescription;
    this._title = title;
  }

  get detailedDescription(): Map<string, string[]> {
    return this._detailedDescription;
  }

  set detailedDescription(value: Map<string, string[]>) {
    this._detailedDescription = value;
  }
  get descriptions(): string[] {
    return this._descriptions;
  }

  set descriptions(value: string[]) {
    this._descriptions = value;
  }
  get tools(): string[] {
    return this._tools;
  }

  set tools(value: string[]) {
    this._tools = value;
  }
  get employer(): string {
    return this._employer;
  }

  set employer(value: string) {
    this._employer = value;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}

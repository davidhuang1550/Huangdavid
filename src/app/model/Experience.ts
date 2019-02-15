export abstract class Experience {
  private _starDate: string; // string because we want to have more flexibility
  private _endDate: string;
  private _location: string;


  constructor(startDate: string,
              endDate: string,
              location: string) {
    this._starDate = startDate;
    this._endDate = endDate;
    this._location = location;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }
  set starDate(value: string) {
    this._starDate = value;
  }
  get starDate(): string {
    return this._starDate;
  }
  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }
}

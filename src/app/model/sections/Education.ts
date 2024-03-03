export class Education {
  private _degreeName!: string;
  private _collegeName!: string;
  private _city!: string;
  private _cgpa!: string;
  private _startDate!: Date;
  private _endDate!: Date;

  public get degreeName(): string {
    return this._degreeName;
  }
  public set degreeName(value: string) {
    this._degreeName = value;
  }
  public get collegeName(): string {
    return this._collegeName;
  }
  public set collegeName(value: string) {
    this._collegeName = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
  public get cgpa(): string {
    return this._cgpa;
  }
  public set cgpa(value: string) {
    this._cgpa = value;
  }
  public get startDate(): Date {
    return this._startDate;
  }
  public set startDate(value: Date) {
    this._startDate = value;
  }
  public get endDate(): Date {
    return this._endDate;
  }
  public set endDate(value: Date) {
    this._endDate = value;
  }
}

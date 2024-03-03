export class Experience {
  private _companyName!: string;
  private _jobTitle!: string;
  private _city!: string;
  private _startDate!: string;
  private _endDate!: string;
  private _jobSummary!: string;

  public get companyName(): string {
    return this._companyName;
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public get jobTitle(): string {
    return this._jobTitle;
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public get city(): string {
    return this._city;
  }
  public set city(value: string) {
    this._city = value;
  }
  public get startDate(): string {
    return this._startDate;
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public get endDate(): string {
    return this._endDate;
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public get jobSummary(): string {
    return this._jobSummary;
  }
  public set jobSummary(value: string) {
    this._jobSummary = value;
  }
}

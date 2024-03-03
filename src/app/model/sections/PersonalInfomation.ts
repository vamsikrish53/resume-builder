export class PersonalInformation {
  private _name!: string;
  private _jobTitle!: string;
  private _email!: string;
  private _phoneNumber!: string;
  private _location!: string;
  private _profileSummary!: string;

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get jobTitle(): string {
    return this._jobTitle;
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get phoneNumber(): string {
    return this._phoneNumber;
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public get location(): string {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }
  public get profileSummary(): string {
    return this._profileSummary;
  }
  public set profileSummary(value: string) {
    this._profileSummary = value;
  }
}

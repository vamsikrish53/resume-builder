export class Skill {
  private _skillName!: string;

  public get skillName(): string {
    return this._skillName;
  }
  public set skillName(value: string) {
    this._skillName = value;
  }
}

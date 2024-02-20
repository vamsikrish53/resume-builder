export class Skill {
    private skillName: string;

    constructor(skillName: string) {
        this.skillName = skillName;
    }

    public getSkillName(): string {
        return this.skillName;
    }
}
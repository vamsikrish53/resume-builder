import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { PersonalInformation } from "./sections/PersonalInfomation";
import { Skill } from "./sections/skill";

export class Resume {
    private _personalInformation!: PersonalInformation;
    private _experiences: Experience[] = [];
    private _skills: Skill[] = [];
    private _education: Education[] = [];

    public get personalInformation(): PersonalInformation {
        return this._personalInformation;
    }
    public set personalInformation(value: PersonalInformation) {
        this._personalInformation = value;
    }

    public get experiences(): Experience[] {
        return this._experiences;
    }
    public set experiences(value: Experience[]) {
        this._experiences = value;
    }

    public get skills(): Skill[] {
        return this._skills;
    }
    public set skills(value: Skill[]) {
        this._skills = value;
    }

    public get education(): Education[] {
        return this._education;
    }
    public set education(value: Education[]) {
        this._education = value;
    }

}
import { Injectable } from "@angular/core";
import { PersonalInformation } from "../model/sections/PersonalInfomation";
import { Resume } from "../model/Resume";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ResumeService {

    resumeDetails: Resume = new Resume();
    
    constructor() {}

    savePersonalInformation(formGroup: FormGroup) {
        PersonalInformation pi = new PersonalInformation();
    }




}
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { plainToClass } from 'class-transformer';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Content, Decoration } from 'pdfmake/interfaces';
import { Resume } from '../model/Resume';
import { Education } from '../model/sections/Education';
import { Experience } from '../model/sections/Experience';
import { PersonalInformation } from '../model/sections/PersonalInfomation';
import { Skill } from '../model/sections/skill';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  htmlToText = require('html-to-text');
  resumeDetails: Resume = new Resume();
  content: Content[] = [];
  dataUpdated = new EventEmitter<{}>();

  constructor(private http: HttpClient) {}

  savePersonalInformation(formGroup: FormGroup) {
    const personalInformation = new PersonalInformation();
    personalInformation.name = formGroup.value.name;
    personalInformation.jobTitle = formGroup.value.jobTitle;
    personalInformation.email = formGroup.value.email;
    personalInformation.phoneNumber = formGroup.value.phoneNumber;
    personalInformation.location = formGroup.value.location;
    personalInformation.profileSummary = formGroup.value.profileSummary;

    this.resumeDetails.personalInformation = personalInformation;
    this.dataUpdated.emit();
  }

  saveSkills(formGroup: FormGroup) {
    this.resumeDetails.skills = [];
    formGroup.value.skills.forEach((name: any) => {
      const skill = new Skill();
      skill.skillName = name.skillName;
      this.resumeDetails.skills.push(skill);
    });

    this.dataUpdated.emit();
  }

  saveExperience(formGroup: FormGroup) {
    this.resumeDetails.experiences = [];
    const experience = new Experience();
    experience.companyName = formGroup.value.companyName;
    experience.jobTitle = formGroup.value.jobTitle;
    experience.city = formGroup.value.city;
    experience.startDate = formGroup.value.startDate;
    experience.endDate =
      formGroup.value.endDate == undefined
        ? 'Present'
        : formGroup.value.endDate;
    experience.jobSummary = formGroup.value.jobSummary.replace('<br>', '');
    this.resumeDetails.experiences.push(experience);

    this.dataUpdated.emit();
  }

  saveEducation(formGroup: FormGroup) {
    this.resumeDetails.educations = [];
    const education = new Education();
    education.degreeName = formGroup.value.degreeName;
    education.collegeName = formGroup.value.collegeName;
    education.city = formGroup.value.city;
    education.cgpa = formGroup.value.cgpa;
    education.startDate = formGroup.value.startDate;
    education.endDate = formGroup.value.endDate;

    this.resumeDetails.educations.push(education);
    this.dataUpdated.emit();
  }

  preFillSampleData() {
    this.http.get('assets/sample-resume.json').subscribe((data: any) => {
      this.resumeDetails = plainToClass(Resume, data);
      this.dataUpdated.emit();
    });
  }

  openPdf(download: boolean) {
    if (!this.resumeDetails.personalInformation) {
      window.alert('Fill the Baisc Details section to View/Download Resume');
      return;
    }
    this.buildDocumentDef();
    const documentDefinition = {
      content: this.content,
      styles: this.getDocumentStyles(),
    };
    if (download) {
      pdfMake.createPdf(documentDefinition).download();
    } else {
      pdfMake.createPdf(documentDefinition).open();
    }
  }

  buildDocumentDef() {
    this.content = [];
    // Personal Information Section
    this.content.push(
      {
        text: this.resumeDetails.personalInformation.name,
        bold: true,
        fontSize: 20,
      },
      {
        text: this.resumeDetails.personalInformation.jobTitle,
        bold: true,
        fontSize: 16,
        marginBottom: 6,
      },
      {
        columns: [
          {
            width: '*',
            text: 'E: ' + this.resumeDetails.personalInformation.email,
          },
          {
            width: '*',
            text: 'P: ' + this.resumeDetails.personalInformation.phoneNumber,
          },
          {
            width: 'auto',
            text: 'A: ' + this.resumeDetails.personalInformation.location,
            alignment: 'right',
          },
        ],
      },
      {
        text: 'Profile Summary',
        bold: true,
        style: 'sectionHeader',
      },
      {
        text: this.resumeDetails.personalInformation.profileSummary,
        fontSize: 12,
        alignment: 'justify',
      }
    );
    // Skills Section
    this.content.push(
      {
        text: 'Skills',
        bold: true,
        style: 'sectionHeader',
      },
      {
        columns: [
          {
            ul: [
              ...this.resumeDetails.skills
                .filter((value, index) => index % 3 === 0)
                .map((s) => s.skillName),
            ],
          },
          {
            ul: [
              ...this.resumeDetails.skills
                .filter((value, index) => index % 3 === 1)
                .map((s) => s.skillName),
            ],
          },
          {
            ul: [
              ...this.resumeDetails.skills
                .filter((value, index) => index % 3 === 2)
                .map((s) => s.skillName),
            ],
            width: 'auto',
          },
        ],
      }
    );
    // Experience Section
    this.content.push({
      text: 'Experience',
      bold: true,
      style: 'sectionHeader',
    });
    this.resumeDetails.experiences.forEach((experience) => {
      this.content.push(
        {
          text: experience.companyName,
          bold: true,
        },
        {
          columns: [
            {
              text: experience.jobTitle,
              bold: true,
            },
            {
              text: experience.startDate + ' - ' + experience.endDate,
              bold: true,
              width: 'auto',
            },
          ],
        },
        {
          text: this.htmlToText.convert(experience.jobSummary, {
            wordwrap: 100,
          }),
        }
      );
    });
    // Education Section
    this.content.push({
      text: 'Education',
      bold: true,
      style: 'sectionHeader',
    });
    this.resumeDetails.educations.forEach((education) => {
      this.content.push(
        {
          text: education.degreeName,
        },
        {
          text: education.collegeName + ', ' + education.city,
        },
        {
          text: 'Duration: ' + education.startDate + ' to ' + education.endDate,
        },
        {
          text: 'Cgpa: ' + education.cgpa,
        }
      );
    });
  }

  getDocumentStyles() {
    return {
      sectionHeader: {
        decoration: 'underline' as Decoration,
        fontSize: 14,
        marginTop: 12,
        marginBottom: 5,
      },
    };
  }
}

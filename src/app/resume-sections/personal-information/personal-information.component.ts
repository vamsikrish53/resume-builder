import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from 'src/app/service/resume.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass'],
})
export class PersonalInformationComponent implements OnInit {
  constructor(private resumeService: ResumeService) {}

  personalInformationForm!: FormGroup;

  ngOnInit(): void {
    this.personalInformationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      jobTitle: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      profileSummary: new FormControl('', [Validators.required]),
    });
    this.loadValues();
  }

  saveDetails() {
    if (this.personalInformationForm.valid) {
      this.resumeService.savePersonalInformation(this.personalInformationForm);
    }
  }

  private loadValues() {
    this.personalInformationForm.patchValue({
      name: this.resumeService.resumeDetails.personalInformation?.name,
      jobTitle: this.resumeService.resumeDetails.personalInformation?.jobTitle,
      email: this.resumeService.resumeDetails.personalInformation?.email,
      phoneNumber:
        this.resumeService.resumeDetails.personalInformation?.phoneNumber,
      location: this.resumeService.resumeDetails.personalInformation?.location,
      profileSummary:
        this.resumeService.resumeDetails.personalInformation?.profileSummary,
    });
  }
}

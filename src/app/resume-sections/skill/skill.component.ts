import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ResumeService } from 'src/app/service/resume.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.sass'],
})
export class SkillComponent implements OnInit {
  constructor(
    private resumeService: ResumeService,
    private formBuilder: FormBuilder
  ) {}

  skillForm!: FormGroup;

  ngOnInit(): void {
    this.skillForm = this.formBuilder.group({
      skills: this.formBuilder.array([]),
    });

    if (this.resumeService.resumeDetails.skills.length > 0) {
      this.resumeService.resumeDetails.skills.forEach((skill) =>
        this.addSkill(skill.skillName)
      );
    } else {
      this.addSkill('');
    }
  }

  createSkillFormGroup(skillName: string): FormGroup {
    return this.formBuilder.group({
      skillName: [skillName, Validators.required],
    });
  }

  addSkill(skillName: string) {
    const skillsArray = this.skillForm.get('skills') as FormArray;
    skillsArray.push(this.createSkillFormGroup(skillName));
  }

  removeSkill(index: number) {
    const skillsArray = this.skillForm.get('skills') as FormArray;
    skillsArray.removeAt(index);
  }

  get skillsControls() {
    return (this.skillForm.get('skills') as FormArray).controls;
  }

  saveDetails() {
    if (this.skillForm.valid) {
      this.resumeService.saveSkills(this.skillForm);
    }
  }
}

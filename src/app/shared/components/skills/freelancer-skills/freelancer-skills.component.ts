import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { text } from 'body-parser';

@Component({
  selector: 'app-freelancer-skills',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './freelancer-skills.component.html',
  styleUrl: './freelancer-skills.component.scss'
})
export class FreelancerSkillsComponent {


 // skill data
 skill_data = [
  {
    skill_items: [
      { icon: '/assets/img/skill/skill-icon-1.png', num: 50, text: "%"},
      { icon: '/assets/img/skill/skill-icon-2.png', num: 50, text: "%"},
      { icon: '/assets/img/skill/skill-icon-3.png', num: 60, text: "%"},
    ],
  },
  {
    skill_items: [
      { icon: '/assets/img/skill/skill-icon-4.png', num: 70, text: "%" },
      { icon: '/assets/img/skill/skill-icon-5.png', num: 65, text: "%" },
    ],
  },

];
  // career data
  career_data = [
    {
      delay: "150",
      icon: '/assets/img/skill/company/company-icon-1.png',
      title: "LMR Island Fuel Station",
      designation: "Filing Assistant (Part - time) ",
      year: "Feb 2024 - Sept 2024",
    },
  ];
}

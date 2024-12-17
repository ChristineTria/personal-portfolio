import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-area-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-area-two.component.html',
  styleUrl: './about-area-two.component.scss'
})
export class AboutAreaTwoComponent {

  counter_data = [
    { num: 8,  title: 'Months Experience', subtitle: 'Filing Assistant' },
    { num: 1,  title: 'Academic Award', subtitle: 'Web Design' },
    { num: 4,  title: 'Seminars', subtitle: 'Cybersecurity, Graphic Design, etc.' },
  ]

}

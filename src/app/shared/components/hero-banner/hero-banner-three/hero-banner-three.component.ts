import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-banner-three',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-banner-three.component.html',
  styleUrls: ['./hero-banner-three.component.scss']
})
export class HeroBannerThreeComponent {

  downloadPDF() {
    const pdfURL = 'assets/files/CV-ChristineTria.pdf'; // Correct relative path
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'CV-ChristineTria.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

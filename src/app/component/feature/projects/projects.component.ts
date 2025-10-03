import { CommonModule } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      img: 'images/rcp_img7.jpg', alt: 'AFC', title: 'Accra Financial Center',
      description: "Complete glass facade installation for a modern office building in Accra's business district.",
      completed: 'March 2023'
    },
    {
      img: 'images/rcp_img6.jpg', alt: 'CR', title: 'Cantonments Residence',
      description: 'Custom glass balustrades and shower enclosures for a luxury residential property.',
      completed: 'January 2023'
    },
    {
      img: 'images/rcp_img8.jpg', alt: 'CR', title: 'Cantonments Residence',
      description: 'Custom glass balustrades and shower enclosures for a luxury residential property.',
      completed: 'January 2023'
    },
    {
      img: 'images/rcp_img5.jpg', alt: 'LBH', title: 'Labadi Beach Hotel',
      description: "Complete renovation of glass partitions and doors for the hotel's conference center.",
      completed: 'November 2022'
    },
    {
      img: 'images/rcp_img4.jpg', alt: 'JTBH', title: 'JamesTown Beach Hotel',
      description: "Complete renovation of glass partitions and doors for the hotel's conference center.",
      completed: 'November 2022'
    },
    {
      img: 'images/rcp_img3.jpg', alt: 'LBH', title: 'Labadi Beach Hotel',
      description: "Complete renovation of glass partitions and doors for the hotel's conference center.",
      completed: 'November 2022'
    },
    {
      img: 'images/rcp_img2.jpg', alt: 'LBH', title: 'Labadi Beach Hotel',
      description: "Complete renovation of glass partitions and doors for the hotel's conference center.",
      completed: 'November 2022'
    },
    {
      img: 'images/rcp_img1.jpg', alt: 'LBH', title: 'Labadi Beach Hotel',
      description: "Complete renovation of glass partitions and doors for the hotel's conference center.",
      completed: 'November 2022'
    }
  ];

  displayProjects: any[] = [];
  position = 0;
  slideWidth = 0;
  currentIndex = 0;
  visibleSlides = 3;
  transitionStyle = 'transform 0.5s ease-in-out';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    const startClones = this.projects.slice(-this.visibleSlides);
    const endClones = this.projects.slice(0, this.visibleSlides);
    this.displayProjects = [...startClones, ...this.projects, ...endClones];

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const item = document.querySelector('.ppd-ihp') as HTMLElement;
        if (item) {
          this.slideWidth = item.offsetWidth;
          this.position = -this.slideWidth * this.visibleSlides;
        }
      });
    }
  }

  slide(direction: 'left' | 'right') {
    if (direction === 'left') {
      this.currentIndex--;
      this.position += this.slideWidth;
    } else {
      this.currentIndex++;
      this.position -= this.slideWidth;
    }

    this.transitionStyle = 'transform 0.5s ease-in-out';

    setTimeout(() => {
      if (this.currentIndex < 0) {
        this.transitionStyle = 'none';
        this.currentIndex = this.projects.length - 1;
        this.position = -this.slideWidth * (this.currentIndex + this.visibleSlides);
      } else if (this.currentIndex >= this.projects.length) {
        this.transitionStyle = 'none';
        this.currentIndex = 0;
        this.position = -this.slideWidth * this.visibleSlides;
      }
    }, 500);
  }
}

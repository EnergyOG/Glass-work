import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Testimonial {
  star_rating: string;
  testify: string;
  img: string;
  name: string;
  position: string;
}

@Component({
  standalone:true,
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.showTestimonials('center');
    }
  }
  testimonials: Testimonial[] = [
    {
      star_rating: '⭐⭐⭐⭐☆',
      testify: '"Prestodea Ghana Limited delivered exceptional quality glass windows for our office building. Their attention to detail and professional installation exceeded our expectations."',
      img: 'images/test_img2.png',
      name: 'Alice Kaayso',
      position: 'ProjectManager, Accra Financial Center',
    },
    {
      star_rating: '⭐⭐⭐⭐⭐',
      testify: '"The glass balustrades installed by Prestodea Ghana Limited have transformed our home. The craftsmanship is impeccable, and the team was professional throughout the project."',
      img: 'images/test_img4.png',
      name: 'Bob Marley',
      position: 'Front Desk and Clerk',
    },
    {
      star_rating: '⭐⭐⭐⭐⭐',
      testify: '"We\'ve worked with Prestodea on multiple hotel renovation projects. Their glass partitions and doors are of the highest quality, and they always deliver on time."',
      img: 'images/test_img4.png',
      name: 'Daniel Mensah',
      position: 'Intern, IT Technician',
    },
    {
      star_rating: '⭐⭐⭐⭐☆',
      testify: '"We\'ve worked with Prestodea on multiple hotel renovation projects. Their glass partitions and doors are of the highest quality, and they always deliver on time."',
      img: 'images/test_img4.png',
      name: 'Dr.Jimeh Owusu Mensah',
      position: 'CEO, Founder of Consar Construction Limited',
    },
    {
      star_rating: '⭐⭐⭐⭐⭐',
      testify: '"The glass balustrades installed by Prestodea Ghana Limited have transformed our home. The craftsmanship is impeccable, and the team was professional throughout the project."',
      img: 'images/test_img2.png',
      name: 'Eve Akoto',
      position: 'Sale and Marketing Manager',
    },
    {
      star_rating: '⭐⭐⭐☆☆',
      testify: '"The glass balustrades installed by Prestodea Ghana Limited have transformed our home. The craftsmanship is impeccable, and the team was professional throughout the project."',
      img: 'images/test_img4.png',
      name: 'Frank Oppong',
      position: 'Software Engineer, Head of IT Department',
    },
    {
      star_rating: '⭐⭐⭐⭐⭐',
      testify: '"The glass balustrades installed by Prestodea Ghana Limited have transformed our home. The craftsmanship is impeccable, and the team was professional throughout the project."',
      img: 'images/test_img2.png',
      name: 'Grace Adepa giffah',
      position: 'Designer and Video Editor',
    },
    {
      star_rating: '⭐⭐⭐⭐☆',
      testify: '"Prestodea Ghana Limited delivered exceptional quality glass windows for our office building. Their attention to detail and professional installation exceeded our expectations."',
      img: 'images/test_img4.png',
      name: 'Hank Loyley',
      position: 'Human Resource Manager',
    },
    {
      star_rating: '⭐⭐⭐⭐☆',
      testify: '"We\'ve worked with Prestodea on multiple hotel renovation projects. Their glass partitions and doors are of the highest quality, and they always deliver on time."',
      img: 'images/test_img2.png',
      name: 'Ivy Appiah',
      position: 'Data Analyst',
    },
  ];

  visibleTestimonials: Testimonial[] = [];
  animationClass = '';

  showTestimonials(group: 'left' | 'center' | 'right', event?: Event) {
    if (event) {
      event.preventDefault();
    }

    if (!this.isBrowser) return;

    if (group === 'left') {
      this.animationClass = 'slide-left';
      this.visibleTestimonials = this.testimonials.slice(0, 3);
    } else if (group === 'center') {
      this.animationClass = 'slide-from-left';
      this.visibleTestimonials = this.testimonials.slice(3, 6);
    } else if (group === 'right') {
      this.animationClass = 'slide-right';
      this.visibleTestimonials = this.testimonials.slice(6, 9);
    }
  }
}

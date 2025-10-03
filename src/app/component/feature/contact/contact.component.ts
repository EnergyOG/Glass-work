import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

enum ServiceType {
  GlassWindow = 'Glass Window',
  GlassBalustrade = 'Glass Balustrade',
  WindowFrames = 'Window Frames',
  GlassDoors = 'Glass Doors',
  ShowerEnclosure = 'Shower Enclosure',
  GlassPartitions = 'Glass Partitions',
  Others = 'Others',
}

interface ContactModel {
  fullName: string;
  email: String;
  phoneNumber: number;
  services: ServiceType;
  message: String;
}

@Component({
  standalone:true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;

  serviceOptions = [
    'Glass Window',
    'Glass Balustrade',
    'Window Frames',
    'Glass Doors',
    'Shower Enclosure',
    'Glass Partitions',
    'Others',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)],
      ],
      services: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // handle submission (e.g., send to backend)
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}

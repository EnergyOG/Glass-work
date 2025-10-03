import { Component } from '@angular/core';
import { AboutComponent } from "./component/feature/about/about.component";
import { ProjectsComponent } from "./component/feature/projects/projects.component";
import { ProductsComponent } from "./component/feature/products/products.component";
import { TestimonialsComponent } from "./component/feature/testimonials/testimonials.component";
import { ContactComponent } from "./component/feature/contact/contact.component";
import { HomeComponent } from './component/feature/home/home.component';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [ HomeComponent, AboutComponent, ProductsComponent, ProjectsComponent,ContactComponent,TestimonialsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pgl';

  mobileMenuOpen: boolean = false;
  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}

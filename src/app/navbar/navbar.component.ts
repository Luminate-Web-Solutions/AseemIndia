import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavActive = false;
  isAboutDropdownActive = false;
  isProjectsDropdownActive = false;
  isContactDropdownActive = false;

  toggleNav() {
    this.isNavActive = !this.isNavActive;
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const dropdown = target.nextElementSibling as HTMLElement;

    if (target.classList.contains('nav-link')) {
      if (target.textContent?.includes('About Us')) {
        this.isAboutDropdownActive = !this.isAboutDropdownActive;
        this.isProjectsDropdownActive = false;
        this.isContactDropdownActive = false;
      } else if (target.textContent?.includes('Projects & Reports')) {
        this.isProjectsDropdownActive = !this.isProjectsDropdownActive;
        this.isAboutDropdownActive = false;
        this.isContactDropdownActive = false;
      } else if (target.textContent?.includes('Contact Us')) {
        this.isContactDropdownActive = !this.isContactDropdownActive;
        this.isAboutDropdownActive = false;
        this.isProjectsDropdownActive = false;
      }
    }
  }
}
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle nav', () => {
    expect(component.isNavActive).toBeFalse();
    component.toggleNav();
    expect(component.isNavActive).toBeTrue();
    component.toggleNav();
    expect(component.isNavActive).toBeFalse();
  });

  it('should toggle dropdown', () => {
    const event = new Event('click');
    const target = document.createElement('a');
    target.textContent = 'About Us';
    spyOnProperty(event, 'target').and.returnValue(target);

    component.toggleDropdown(event);
    expect(component.isAboutDropdownActive).toBeTrue();
    expect(component.isProjectsDropdownActive).toBeFalse();
    expect(component.isContactDropdownActive).toBeFalse();

    component.toggleDropdown(event);
    expect(component.isAboutDropdownActive).toBeFalse();
  });
});
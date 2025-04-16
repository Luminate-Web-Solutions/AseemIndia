import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(20px)'
      })),
      transition('void => *', [
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  @ViewChild('partnersSwiper') partnersSwiper!: ElementRef;
  
  slides = [
    { 
      image: 'IMG_0728.jpg', 
      alt: 'ASEEM Convention 2023', 
      title: 'Community Gathering 2023' 
    },
    { 
      image: 'IMG_2532.jpg', 
      alt: 'ASEEM Workshop', 
      title: 'Leadership Workshop' 
    },
    { 
      image: 'IMG_2543.jpg', 
      alt: 'Media Coverage', 
      title: 'Media Coverage of Our Impact' 
    },
    { 
      image: 'IMG_2585.jpg', 
      alt: 'Success Stories', 
      title: 'Community Success Stories' 
    },
    { 
      image: 'IMG_2597.jpg', 
      alt: 'Annual Meeting', 
      title: 'Annual Meeting 2023' 
    }
  ];
  
  focusAreas = [
    {
      icon: 'people',
      title: 'Empowering Communities',
      description: 'Socio-economic empowerment of minority communities through assistance in accessing welfare schemes.'
    },
    {
      icon: 'trending_up',
      title: 'Strengthening Organizations',
      description: 'Supporting grass-roots organizations that work with Minority Communities.'
    },
    {
      icon: 'search',
      title: 'Research & Audit',
      description: 'Conducting action research and social audit of government programmes and policies.'
    },
    {
      icon: 'gavel',
      title: 'Legal Advocacy',
      description: 'Advocating and intervening legally for the protection of rights and entitlements.'
    }
  ];
  
  approaches = [
    {
      icon: 'engineering',
      title: 'Project Implementation',
      description: 'We implement projects addressing education, awareness, leadership development, and social security.'
    },
    {
      icon: 'hub',
      title: 'Networking & Collaboration',
      description: 'We collaborate with NGOs, grass-root organizations, and educational institutions.'
    },
    {
      icon: 'school',
      title: 'Research & Internships',
      description: 'We engage interns for research on topics related to marginalized communities.'
    },
    {
      icon: 'balance',
      title: 'Government Engagement',
      description: 'We make the government accountable through legal and policy interventions.'
    }
  ];
  
  publications = [
    {
      title: 'ASEEM Annual Report 2023-24',
      description: 'Our latest annual report highlighting achievements and challenges.',
      link: '/reports/annual-report-2023-24'
    },
    {
      title: 'Social Audit of Primary Health Centers',
      description: 'Comprehensive audit of healthcare services in Hyderabad.',
      link: '/reports/health-centers-audit'
    },
    {
      title: 'Broken Promises Report',
      description: 'Analysis of development of minorities in Telangana.',
      link: '/reports/broken-promises'
    }
  ];
  
  partners = [
    'SAAPE', 'LDC Watch', 'Safa Baitul Maal', 
    'Hyderabad Urban Lab', 'Focus High School', 'Deccan Archive Foundation'
  ];
  
  // Impact numbers for animation
  impactNumbers = {
    pensionBeneficiaries: { start: 0, end: 611, current: 0, prefix: '', suffix: '+' },
    pensionFunds: { start: 0, end: 1.57, current: 0, prefix: '₹', suffix: ' Cr' },
    scholarshipApplications: { start: 0, end: 20000, current: 0, prefix: '', suffix: '+' },
    scholarshipFunds: { start: 0, end: 4, current: 0, prefix: '₹', suffix: ' Cr' }
  };
  
  constructor() {}
  
  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    // Initialize Hero Swiper
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    
    // Initialize Partners Swiper
    const partnersSwiper = new Swiper(this.partnersSwiper.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.partners-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.partners-button-next',
        prevEl: '.partners-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }
    });
    
    // Start number animation when impact section is in view
    this.setupIntersectionObserver();
  }
  
  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Observe the impact section
    const impactSection = document.querySelector('.impact-section');
    if (impactSection) {
      observer.observe(impactSection);
    }
  }
  
  animateNumbers() {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Update each number
      for (const key in this.impactNumbers) {
        if (this.impactNumbers.hasOwnProperty(key)) {
          const item = this.impactNumbers[key as keyof typeof this.impactNumbers];
          const value = item.start + Math.round((item.end - item.start) * this.easeOutQuad(progress));
          item.current = value;
        }
      }
      
      // Apply updates to DOM
      this.updateDOMNumbers();
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }
  
  // Easing function for smoother animation
  easeOutQuad(t: number): number {
    return t * (2 - t);
  }
  
  updateDOMNumbers() {
    for (const key in this.impactNumbers) {
      if (this.impactNumbers.hasOwnProperty(key)) {
        const item = this.impactNumbers[key as keyof typeof this.impactNumbers];
        const element = document.getElementById(key);
        if (element) {
          element.textContent = `${item.prefix}${item.current}${item.suffix}`;
        }
      }
    }
  }
}


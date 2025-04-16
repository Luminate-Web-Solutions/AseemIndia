import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  teamMembers = [
    {
      name: 'Ali Asghar',
      position: 'President',
      image: 'assets/images/team/ali-asghar.jpg',
      bio: 'Founder and President of ASEEM, working for the rights and entitlements of marginalized communities.'
    },
    {
      name: 'MA Moid',
      position: 'Vice President',
      image: 'assets/images/team/ma-moid.jpg',
      bio: 'Vice President with extensive experience in community development and advocacy.'
    },
    {
      name: 'S.Q.Masood',
      position: 'Secretary',
      image: 'assets/images/team/sq-masood.jpg',
      bio: 'Secretary of ASEEM, focused on legal interventions and policy advocacy.'
    },
    {
      name: 'Namrata Jaiswal',
      position: 'Joint Secretary',
      image: 'assets/images/team/namrata-jaiswal.jpg',
      bio: 'Joint Secretary with expertise in community engagement and program implementation.'
    },
    {
      name: 'Kaleem Ahmed',
      position: 'Treasurer',
      image: 'assets/images/team/kaleem-ahmed.jpg',
      bio: 'Treasurer managing financial operations and ensuring transparency.'
    },
    {
      name: 'Kaneez Fathima',
      position: 'Member',
      image: 'assets/images/team/kaneez-fathima.jpg',
      bio: 'Member with focus on women empowerment and community development.'
    },
    {
      name: 'Mounis Abidi',
      position: 'Member',
      image: 'assets/images/team/mounis-abidi.jpg',
      bio: 'Member contributing to research and documentation initiatives.'
    }
  ];

  advisoryBoard = [
    {
      name: 'Mr. Mohammed Ahsan Abid',
      position: 'Advisory Board Member',
      image: 'assets/images/team/ahsan-abid.jpg',
      bio: 'Indian Administrative Service (IAS) officer who has made significant contributions both in public service and academia. He served as a faculty member at TISS Hyderabad, where he shared his expertise with students in the field of social sciences and administration.'
    },
    {
      name: 'Dr. Khaja Mohammed Ziyauddin',
      position: 'Advisory Board Member',
      image: 'assets/images/team/ziyauddin.jpg',
      bio: 'Associate professor and Head of the Department of Sociology at Maulana Azad National Urdu University (MANUU), Hyderabad. His areas of interest include Sociology of Minority Studies, Dalits, Exclusion/Inclusion Studies, Urban Sociology, Traditional Occupations and Social Groups.'
    }
  ];

  focusAreas = [
    {
      title: 'Socio-economic Empowerment',
      icon: 'handshake-o',
      description: 'Empowering minority communities by interacting and engaging with them to deliver welfare programs and schemes through assistance in utilizing civic spaces, addressing grievances, raising awareness, and applying for or correcting essential documents.'
    },
    {
      title: 'Strengthening Grass-roots Organizations',
      icon: 'users',
      description: 'Providing training, resources, and support to grass-roots organizations that work with Minority Communities to enhance their capacity and effectiveness.'
    },
    {
      title: 'Action Research and Social Audit',
      icon: 'search',
      description: 'Conducting action research and social audit of government programmes, schemes and policies to identify the problems and needs of Minorities and to monitor implementation and impact.'
    },
    {
      title: 'Legal Advocacy',
      icon: 'gavel',
      description: 'Advocating and intervening legally for the protection and promotion of the rights and entitlements of minority communities in education, health, livelihood, civil rights, and social security.'
    },
    {
      title: 'Awareness and Mobilization',
      icon: 'bullhorn',
      description: 'Organizing campaigns, discussions, seminars, and dialogues to raise awareness and mobilize public opinion on issues affecting marginalized people and demanding accountability from government authorities.'
    }
  ];

  approaches = [
    {
      title: 'Project Implementation',
      icon: 'cogs',
      description: 'We implement projects that address the needs of marginalized communities, focusing on education, awareness, leadership development, civic engagement, perspective building, social security, and food security.'
    },
    {
      title: 'Networking and Collaboration',
      icon: 'sitemap',
      description: 'We network and collaborate with NGOs, grass-root organizations, educational institutions and social workers who are working on the ground with the marginalized communities.'
    },
    {
      title: 'Research Engagement',
      icon: 'book',
      description: 'We engage interns for research work on various topics related to the marginalized communities, such as their socio-economic conditions, their access to rights and entitlements, and their challenges and opportunities.'
    },
    {
      title: 'Government Engagement',
      icon: 'university',
      description: 'We engage with government agencies for better and timely implementation of welfare programmes for the marginalized communities, providing feedback, suggestions, and recommendations.'
    },
    {
      title: 'Accountability Mechanisms',
      icon: 'balance-scale',
      description: 'We make the government accountable by legal and policy interventions towards their mandates, filing public interest litigations, petitions, and representations on behalf of the marginalized communities.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

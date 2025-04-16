import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advocacy',
  standalone: false,
  templateUrl: './advocacy.component.html',
  styleUrl: './advocacy.component.css'
})
export class AdvocacyComponent implements OnInit {
  legalInterventions = [
    {
      title: 'PIL Against Police Excesses During COVID-19 Lockdown',
      description: 'We filed a public interest litigation (PIL) in the Telangana High court against the police officials who committed excesses on helpless people during the COVID-19 lockdown, such as beating, harassing, and arresting them for violating the restrictions.',
      outcome: 'Demanded accountability for human rights violations and compensation for victims.'
    },
    {
      title: 'PIL Against Deletion of Ration Cards',
      description: 'We filed a PIL in the Telangana High court and later an SLP in Supreme Court of India against the state government for indiscriminately deleting 20 lakh ration cards, which deprived the poor of subsidized rations and other benefits.',
      outcome: 'Argued that the cancellation was arbitrary, illegal, and unconstitutional and violated the right to food and dignity of the poor.'
    },
    {
      title: 'PIL for Streamlining Aasara Pension Applications',
      description: 'We filed a PIL in the Telangana High court against the pendency of lakhs of applications and the need to streamline the application process under the Aasara social security pension scheme of the Telangana government.',
      outcome: 'The Telangana government sanctioned all the pending applications and issued orders to release Rs. 1,200 crore for clearing all the pending applications.'
    }
  ];

  campaigns = [
    {
      title: 'Inequality Campaign',
      description: 'Raising awareness about economic and social inequality affecting marginalized communities.',
      image: 'assets/images/advocacy/inequality-campaign.jpg'
    },
    {
      title: 'Right to Free Healthcare Services',
      description: 'Advocating for free healthcare services in Urban Primary Health Centres (UPHCs).',
      image: 'assets/images/advocacy/healthcare-campaign.jpg'
    },
    {
      title: 'Vaccine Equality for LDCs',
      description: 'Supporting global efforts for vaccine equality for Least Developed Countries (LDCs).',
      image: 'assets/images/advocacy/vaccine-campaign.jpg'
    },
    {
      title: 'Social Security Campaign',
      description: 'Advocating for comprehensive social security measures for vulnerable populations.',
      image: 'assets/images/advocacy/social-security-campaign.jpg'
    }
  ];

  publications = [
    {
      title: 'Booklet on CAA, NPR and NRC',
      authors: 'Ali Asghar and S.Q.Masood',
      description: 'Explains how the Citizenship Amendment Act 2019 changes the idea of India as a secular democratic republic and threatens to destroy the rich diversity of the country.',
      link: '/reports/caa-npr-nrc'
    },
    {
      title: 'Philanthropy in Muslim Community - From Charity to Social Justice',
      authors: 'Ali Asghar and Syed Mohammed',
      description: 'Explores how philanthropy works in the Muslim Community, its impact on the poor, and how it can move from charity towards promoting social justice.',
      link: '/reports/philanthropy-muslim-community'
    },
    {
      title: 'Minority Rights in India and Legal Resources for Social Action',
      authors: 'Ali Asghar and S.Q.Masood',
      description: 'Covers the origin, recognition, and protection of minority rights in India and the legal resources for social action.',
      link: '/reports/minority-rights-india'
    },
    {
      title: 'An analysis report of ASEEM\'s work by HUL',
      authors: 'Vijay Sapkal',
      description: 'Examines ASEEM\'s efforts in empowering the Muslim Community to claim their rights and entitlements by accessing government programmes and schemes.',
      link: '/reports/aseem-work-analysis'
    },
    {
      title: 'Social Audit of Primary Health Centers in Hyderabad',
      authors: 'ASEEM and SAAPE',
      description: 'A comprehensive social audit of primary healthcare services in Hyderabad, evaluating 51 UPHCs and Basti Dawakhanas.',
      link: 'https://drive.google.com/file/d/1PaDHA7l8VWJJFi9Ru2_njSHtXSeV0rj_/view'
    },
    {
      title: 'Understanding Musi River of Hyderabad',
      authors: 'The Deccan Archives Foundation, INTACH Hyderabad, and ASEEM',
      description: 'Workshop report helping students understand the historic core of the Musi River through on-site visits and expert sessions.',
      link: 'https://drive.google.com/file/d/1m7lw_zhcB_A7YOrxV3cCmP7vLzsXYo_P/view'
    },
    {
      title: 'Digitalization Of Social Security: Exclusion, Privacy and Data Limitation',
      authors: 'ASEEM and SAAPE',
      description: 'Panel discussion report analyzing cases where digitization of public sector systems resulted in exclusion of beneficiaries.',
      link: 'https://drive.google.com/file/d/1QrXmhDC_8qJrcld8JNkJ5lnHa-a4CvBO/view'
    },
    {
      title: 'Arsh Mahal Community Space',
      authors: 'ASEEM and Hyderabad Urban Lab Foundation',
      description: 'Project report on building a community space for children and girls in the Arsh Mahal slum at Kishan Bagh, Hyderabad.',
      link: 'https://drive.google.com/file/d/1vpAjZBt_JlqV87ZZUPa1gnNvt_ZetZql/view'
    },
    {
      title: 'Broken Promises! Development of Minorities in One Year of Congress Government in Telangana',
      authors: 'Ali Asghar and S.Q.Masood',
      description: 'Performance analysis of one year of the Congress government\'s promises and deliverables for minority communities.',
      link: 'https://drive.google.com/file/d/1IQlQyrKP4QhwFiENCs3keC_2SMyzwxvF/view'
    },
    {
      title: 'ASEEM engagement with Focus High School',
      authors: 'ASEEM',
      description: 'A brief report on ASEEM\'s engagement with Focus High School.',
      link: '/reports/focus-high-school'
    },
    {
      title: 'ASEEM Partnership with Safa Baitul Maal',
      authors: 'ASEEM',
      description: 'Help Desk for essential Documents and Schemes - A brief Report.',
      link: '/reports/safa-baitul-maal'
    }
  ];

  annualReports = [
    {
      year: '2016-17',
      link: '/reports/annual-report-2016-17'
    },
    {
      year: '2015-21',
      link: '/reports/annual-report-2015-21'
    },
    {
      year: '2021-22',
      link: '/reports/annual-report-2021-22'
    },
    
    {
      year: '2022-23',
      link: 'https://drive.google.com/file/d/1yVrfodLPXbNNk-jZ-V2ntjLo4eu93klZ/view'
    },
    {
      year: '2023-24',
      link: 'https://drive.google.com/file/d/1BxpOvcr6r5EVWW7En3WY9bGKhixcWBAp/view'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

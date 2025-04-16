import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-report',
  standalone: false,
  templateUrl: './news-report.component.html',
  styleUrl: './news-report.component.css'
})
export class NewsReportComponent implements OnInit {
  newsItems = [
    {
      title: 'ASEEM Files PIL for Aasara Pension Applications',
      date: 'March 15, 2024',
      summary: 'ASEEM has filed a public interest litigation (PIL) in the Telangana High Court against the pendency of lakhs of applications under the Aasara social security pension scheme.',
      image: 'assets/images/news/news1.jpg',
      content: 'ASEEM has filed a public interest litigation (PIL) in the Telangana High Court against the pendency of lakhs of applications and the need to streamline the application process under the Aasara social security pension scheme of the Telangana government. The Aasara scheme provides financial assistance to the most vulnerable people of the society, such as the old aged, widows, disabled, single women, and others. We have argued that the delay and inefficiency in processing the applications violates the rights and dignity of the poor and needy people who depend on the pension for their survival. We have also suggested ways to simplify and expedite the application process and to make it more transparent and accountable.',
      link: '/news/aseem-files-pil-aasara-pension'
    },
    {
      title: 'Workshop on Understanding Musi River of Hyderabad',
      date: 'February 20, 2024',
      summary: 'ASEEM collaborated with The Deccan Archives Foundation and INTACH Hyderabad to host a workshop on understanding the historic core of the Musi River.',
      image: 'assets/images/news/news2.jpg',
      content: 'The workshop, hosted by The Deccan Archives Foundation in collaboration with INTACH Hyderabad and ASEEM, aimed to help students understand the historic core of the Musi River through on-site visits, expert sessions on its history and ecology, mapping activities around the historic core area, and discussions to present their ideas for the riverfront. The workshop was attended by students from various educational institutions in Hyderabad and was well-received by the participants. The workshop report has been published and is available on our website.',
      link: '/news/workshop-musi-river'
    },
    {
      title: 'ASEEM Releases Report on Social Audit of Primary Health Centers',
      date: 'January 10, 2024',
      summary: 'ASEEM, in collaboration with SAAPE, has released a comprehensive report on the social audit of primary healthcare services in Hyderabad.',
      image: 'assets/images/news/news3.jpg',
      content: 'In response to the profound and lasting impact of the COVID-19 pandemic, particularly on poor and vulnerable communities, ASEEM, in collaboration with the South Asia Alliance for Poverty Eradication (SAAPE), undertook an initiative to conduct a comprehensive social audit of primary healthcare services in Hyderabad. The Urban Primary Health Centers (UPHCs) and Basthi Dawakhanas set up to implement the National Urban Health Mission (NUHM) are instrumental in delivering vital healthcare services to the poor and marginalised people. Our foremost aim was to gain a deep understanding of the existing healthcare infrastructure and services within Hyderabad. We have conducted a survey of 51 UPHCs and Basti Dawakhanas to evaluate the physical infrastructure of UPHCs and Basthi Dawakhanas, including their adequacy and condition.',
      link: '/news/social-audit-health-centers'
    },
    {
      title: 'Panel Discussion on Digitalization of Social Security',
      date: 'December 5, 2023',
      summary: 'ASEEM and SAAPE organized a panel discussion during the World Social Forum in Kathmandu, Nepal, on the digitalization of social security systems.',
      image: 'assets/images/news/news4.jpg',
      content: 'ASEEM and SAAPE organized a panel discussion during the World Social Forum in Kathmandu, Nepal, in 2024. The panel analyzed several cases from different regions where the digitization and automation of large public sector data/systems have resulted in the widespread exclusion of beneficiaries. This exclusion has significant implications for social security, equality, and data protection. The panel discussion brought together experts from various countries to share their experiences and insights on the challenges and opportunities of digitalization in social security systems. The discussion highlighted the need for inclusive and accessible digital systems that do not leave behind the most vulnerable sections of society.',
      link: '/news/panel-discussion-digitalization'
    },
    {
      title: 'ASEEM Releases "Broken Promises" Report',
      date: 'November 15, 2023',
      summary: 'ASEEM has released a brief report on the development of minorities in one year of Congress Government in Telangana.',
      image: 'assets/images/news/news5.jpg',
      content: 'Before the state elections in 2023, the Congress party announced several plans for the minority community, including increasing Minorities Welfare budget to 4,000 crore, introducing a dedicated minorities sub-plan ensuring optimal allocation and utilization, increasing and streamlining the post-matric scholarship under the RTF scheme and old dues will be cleared. However, the ground reality is far from what was promised. ASEEM has conducted a performance analysis of one year of the Congress government\'s promises and their deliverables. The report titled "Broken Promises! A Brief Report on Development of Minorities in One Year of Congress Government in Telangana" has been published and is available on our website.',
      link: '/news/broken-promises-report'
    },
    {
      title: 'ASEEM Annual Convention 2023',
      date: 'October 20, 2023',
      summary: 'ASEEM held its annual convention in Hyderabad, bringing together activists, researchers, and community leaders to discuss the challenges and opportunities for marginalized communities.',
      image: 'assets/images/news/news6.jpg',
      content: 'ASEEM held its annual convention in Hyderabad, bringing together activists, researchers, and community leaders to discuss the challenges and opportunities for marginalized communities. The convention featured keynote speeches, panel discussions, and workshops on various topics related to the rights and entitlements of marginalized communities. The convention also provided a platform for networking and collaboration among different stakeholders working for the welfare of marginalized communities. The event was well-attended and received positive feedback from the participants.',
      link: '/news/annual-convention-2023'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
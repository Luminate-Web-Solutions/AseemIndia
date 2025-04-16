import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdvocacyComponent } from './advocacy/advocacy.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GetinvolvedComponent } from './getinvolved/getinvolved.component';
import { HomeComponent } from './home/home.component';
import { ImpactComponent } from './impact/impact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PartnersComponent } from './partners/partners.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReportsComponent } from './reports/reports.component';
import { TeamComponent } from './team/team.component';
import { NewsReportComponent } from './news-report/news-report.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'advocacy', component: AdvocacyComponent },
  { path: 'casestudies', component: CasestudiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'getinvolved', component: GetinvolvedComponent },
  { path: 'home', component: HomeComponent },
  { path: 'impact', component: ImpactComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'news', component: NewsReportComponent },
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

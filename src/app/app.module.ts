import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { AdvocacyComponent } from './advocacy/advocacy.component';
import { ImpactComponent } from './impact/impact.component';
import { GetinvolvedComponent } from './getinvolved/getinvolved.component';
import { PartnersComponent } from './partners/partners.component';
import { ReportsComponent } from './reports/reports.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CasestudiesComponent } from './casestudies/casestudies.component';
import { DonateComponent } from './donate/donate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    TeamComponent,
    AdvocacyComponent,
    ImpactComponent,
    GetinvolvedComponent,
    PartnersComponent,
    ReportsComponent,
    GalleryComponent,
    CasestudiesComponent,
    DonateComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

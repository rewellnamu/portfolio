import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'certificates', component: CertificatesComponent },
];
import { Component, NgModule } from '@angular/core';
import { ChildActivationEnd, RouterModule, Routes } from '@angular/router';
import { CalendarContent } from '@fullcalendar/angular';
import { Children } from 'preact/compat';
import { AssistanteComponent } from './assistante/assistante.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FicheAlimentComponent } from './components/fiche-aliment/fiche-aliment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { ListePatientadComponent} from './administration/liste-patientad/liste-patientad.component'
import { ListeMedadComponent } from './administration/liste-medad/liste-medad.component';
import { ListeAssistadComponent } from './administration/liste-assistad/liste-assistad.component'

const routes: Routes = [
  {
    path:'',
    component: NavbarComponent
  },
   {
    path: 'patient',
     component: PatientsComponent,
    
   },

   {
     path: 'assistante',
   component: AssistanteComponent
 },
 {
   path: 'calendar',
   component: CalendarComponent
 },
 {
   path: 'fichealiment',
   component: FicheAlimentComponent
 },
 
 {
   path: 'listenutrisionistes',
   component: ListeMedadComponent
 },
 {
   path: 'listeassistantes',
   component: ListePatientadComponent
 },
 {
   path: 'listeassistantes',
   component: ListeAssistadComponent
 }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
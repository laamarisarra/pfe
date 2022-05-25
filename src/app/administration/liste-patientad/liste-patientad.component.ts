import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import {ListepatiadService} from '../../service/listepatiad.service';
@Component({
  selector: 'app-liste-patientad',
  templateUrl: './liste-patientad.component.html',
  styleUrls: ['./liste-patientad.component.css']
})
export class ListePatientadComponent implements OnInit {
  patients:any;
  patient = new Patient();
  constructor( private listepatiadService:ListepatiadService ) { }

  ngOnInit(): void {
    this.getpatiadData()

  }
  getpatiadData(){
    this.listepatiadService.getpatiadData().subscribe(res => {
      this.patients = res;
  });

  }
  insertpatiadData(){
    this.listepatiadService.createpatiad(this.patient).subscribe(res =>{
      this.getpatiadData();
    });
    }
    deletepatiadData(id:any){
      this.listepatiadService.deletepatiad(id).subscribe(res => {
        this.getpatiadData();
      })
     }  

}

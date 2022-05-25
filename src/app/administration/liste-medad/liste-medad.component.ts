import { Component, OnInit } from '@angular/core';
import { Patient } from '../../patient';
import {ListemedadService } from '../../service/listemedad.service'
@Component({
  selector: 'app-liste-medad',
  templateUrl: './liste-medad.component.html',
  styleUrls: ['./liste-medad.component.css']
})
export class ListeMedadComponent implements OnInit {
  patients:any;
  patient = new Patient();

  constructor(private listemedadService:ListemedadService) { }

  ngOnInit(): void {

    this.getmedadData()
  }
  getmedadData(){
    this.listemedadService.getmedadData().subscribe(res => {
      this.patients = res;
  });

}

insertMedadData(){
  this.listemedadService.createmedad(this.patient).subscribe(res =>{
    this.getmedadData();
  });
  }
  deleteMedadData(id:any){
    this.listemedadService.deletemedad(id).subscribe(res => {
      this.getmedadData();
    })
   }  
}

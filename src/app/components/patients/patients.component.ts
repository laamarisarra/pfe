import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Patient } from 'src/app/patient';
import { ThisReceiver } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
patients:any;

   
patient = new Patient();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPatientsData();
   
  }

  getPatientsData(){
    this.dataService.getData().subscribe(res => {
      this.patients = res;
      
    });
  }
   insertData(){
     this.dataService.insertData(this.patient).subscribe(res =>{
       this.getPatientsData();
     });
     
     
    
 }

  deleteData(id:any){
   this.dataService.deleteData(id).subscribe(res => {
     this.getPatientsData();
   })
  }

}
 

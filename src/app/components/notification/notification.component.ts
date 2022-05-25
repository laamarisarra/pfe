import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/notification';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
notifications:any;
notification = new Notification ();
  constructor(private dataService:NotificationService) { }

  ngOnInit(): void {
    this.getNotificationData();
  }

  getNotificationData(){
    this.dataService.getNotification().subscribe(res => {
      this.notifications = res;
      
    });
  }
  insertNotification(){
    this.dataService.insertNotification(this.notification).subscribe(res =>{
      this.getNotificationData();
    });
}
}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-userapp',
  templateUrl: './userapp.component.html',
  styleUrls: ['./userapp.component.css']
})

export class UserAppComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserAppList: any = [];
  AppList: any = [];
  AppId: number = 0;

  ngOnInit(): void {
    this.refreshUserAppList();
    this.refreshAppList();
  }

  deleteClick(item: any) {
    this.service.deleteUserApp(item.UserId).subscribe(result => {
      alert(result.toString());
      this.refreshUserAppList();
    });
  }

  addClick(item: any) {
    var val = { UserId: item.UserId, AppId: this.AppId };
    this.service.addAppForUser(val).subscribe(result => {
      alert(result.toString());
      this.refreshUserAppList();
    });
  }

  refreshUserAppList() {
    this.service.getUserApp().subscribe(result => {
      this.UserAppList = result;
    }); 
  }

  refreshAppList() {
    this.service.getAppList().subscribe(result => {
      this.AppList = result;
    }); 
  }

}

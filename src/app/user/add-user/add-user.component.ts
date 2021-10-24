import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  UserName: string = '';
  UserDescription: string = '';
  UserAppId: number = 0;

  addClick() {
    var val = { Name: this.UserName, Description: this.UserDescription, ApplicationId: this.UserAppId };
    this.service.addUser(val).subscribe(result => {
      alert(result.toString());
    });
  }
}

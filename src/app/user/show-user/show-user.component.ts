import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})

export class ShowUserComponent implements OnInit {

  constructor(private service: SharedService) { }

  UserList: any = [];
  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.refreshUserList();
  }

  deleteClick(item: any) {
    this.service.deleteUser(item.Id).subscribe(result => {
      alert(result.toString());
      this.refreshUserList();
    });
  }

  refreshUserList() {
    this.service.getUserList().subscribe(result => {
      this.UserList = result;
      this.totalLength = result.length;
    });
  }
}

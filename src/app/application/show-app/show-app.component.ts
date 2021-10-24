import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-app',
  templateUrl: './show-app.component.html',
  styleUrls: ['./show-app.component.css']
})

export class ShowAppComponent implements OnInit {

  constructor(private service: SharedService) { }

  ApplicationList: any = [];
  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
    this.refreshAppList();
  }

  deleteClick(item: any) {
    this.service.deleteApplication(item.Id).subscribe(result => {
      alert(result.toString());
      this.refreshAppList();
    });
  }

  refreshAppList() {
    this.service.getAppList().subscribe(result => {
      this.ApplicationList = result;
      this.totalLength = result.length;
    });
  }

}

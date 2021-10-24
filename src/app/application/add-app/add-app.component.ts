import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-app',
  templateUrl: './add-app.component.html',
  styleUrls: ['./add-app.component.css']
})

export class AddAppComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void {
  }

  AppName: string = '';
  AppDescription: string = '';

  addClick() {
    var val = { Name: this.AppName, Description: this.AppDescription };
    this.service.addApplication(val).subscribe(result => {
      alert(result.toString());
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-idconfig',
  templateUrl: './idconfig.component.html',
  styleUrls: ['./idconfig.component.scss']
})
export class IdconfigComponent implements OnInit {

  public data;
  public filterQuery = '';

  constructor(private http: Http) {
    http.get('assets/testdata.json')
      .subscribe((data) => {
        setTimeout(() => {
          this.data = data.json();
        }, 2000);
      });
  }
  isCollapsed: boolean = false;

  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}

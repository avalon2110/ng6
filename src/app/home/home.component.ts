import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  competency_id: string;
  city_id: string;
  city$: Object;
  competency$: Object;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCity().subscribe(
      data => this.city$ = data
    );

    this.data.getCompetency().subscribe(
      data => this.competency$ = data
    );

  }

  onSelect(city) {
    console.log(city);
  }

  onChangeCity(val) {
    this.city_id = val;
    console.log(val);
  }

  onChangeCompetency(val) {
    this.competency_id = val;
    console.log(val);
  }

  sendData() {
    this.data.get(`https://roundlaw.com/api/v1/users/filter?competency_id='${this.city_id}'&city_id='${this.competency_id}`)
      .then(res => console.log(res));

  }

}

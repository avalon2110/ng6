import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getCity() {
    return this.http.get('https://roundlaw.com/api/v1/places/cities');
  }

  getCompetency() {
    return this.http.get('https://roundlaw.com/api/v1/competencies');
  }

  get(link: string) {
    return this.http.get(link).toPromise();
  }


  getLawyer() {
    return this.http.get('https://roundlaw.com/api/v1/users/filter?competency_id=%7Bid%7D&city_id=%7Bid');
  }
}

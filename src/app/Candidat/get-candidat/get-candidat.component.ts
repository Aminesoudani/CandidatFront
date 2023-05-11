import { Component, OnInit } from '@angular/core';
import { Candidate } from '../model/candidate';
import { Magasin } from '../model/magasin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidat-list',
  templateUrl: './get-candidat.component.html',
  styles: []
})
export class GetCandidatComponent implements OnInit {
  magasins: any = [];
  candidats: any = [];
  //magasins: Magasin[] = [];
  private apiUrl = 'http://localhost:8082/candidate/getAll';
  private delapiUrl = 'http://localhost:8082/magasin/delete';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCandidats();
  }

  getCandidats(){ 
    this.http.get(this.apiUrl)
    .subscribe(res => {
    this.candidats = res;
  }, err => {
    //console.log(err);
  });}
  deleteCandidat(magasinId: number) {
    this.http.delete(this.delapiUrl + '/' + magasinId)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
}

}

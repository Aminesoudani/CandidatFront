
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../model/candidate';
import { Magasin } from '../model/magasin';

@Component({
  selector: 'app-delete-candidat',
  templateUrl: './delete-candidat.component.html',
  styleUrls: ['./delete-candidat.component.css']
})
export class DeleteCandidatComponent implements OnInit {
  candidat: Candidate = new Candidate();
  magasin: Magasin = new Magasin();
  magasins: any = [];
  private apiUrl = 'http://localhost:8082/magasin/getAll';
  private delapiUrl = 'http://localhost:8080/magasin/delete';
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  deleteCandidat(magasinId: number) {
    this.http.delete(this.delapiUrl + '/' + magasinId)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
}
}

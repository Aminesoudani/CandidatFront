import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../model/candidate';
import { Magasin } from '../model/magasin';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { GetCandidatComponent } from '../get-candidat/get-candidat.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';


@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})

export class AddCandidatComponent implements OnInit {
  
  candidate: Candidate = new Candidate();
  magasin: Magasin = new Magasin();
  candidats: any = [];
 
  
  private apiUrl = 'http://localhost:8082/candidate/add';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
   
      }

  addCandidat(){
    let lastId: number = 0; // initialize lastId to 0
   this.http.get<Candidate[]>('http://localhost:8082/candidate/getAll')
  .subscribe(res => {
    this.candidats = res;
    this.candidate.id = res.length + 1; // set the id of the new candidate
    console.log(lastId,this.candidate.id);
    this.http.post(this.apiUrl, this.candidate)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/get-candidat']);
      }, err => {
        console.log(err);
      });
  }, err => {
    console.log(err);
  });
  //window.location.reload();
  }
  
  
}

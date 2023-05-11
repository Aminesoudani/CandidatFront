import { Component } from '@angular/core';
import { Magasin } from './Candidat/model/magasin';
import { Candidate } from './Candidat/model/candidate';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';
  magasins: any = [];
  candidats: any = [];
  candidate: Candidate = new Candidate();
  editableCandidat: any = null;
  // Define any necessary properties, methods or event handlers for the app here
  private apiUrl = 'http://localhost:8082/candidate/getAll';
  private delapiUrl = 'http://localhost:8082/candidate/delete';
  private editapiUrl = 'http://localhost:8082/candidate/update';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCandidats();
  }

  getCandidats(){ 
    this.http.get(this.apiUrl)
    .subscribe(res => {
    this.candidats = res;
  }, err => {
    console.log(err);
  });}

  deleteCandidat(candidatId: number) {
    this.http.delete(this.delapiUrl + '/' + candidatId)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });
}
  editCandidat(editableCandidat:Candidate) {
    console.log(editableCandidat)
        this.http.put(this.editapiUrl, this.editableCandidat)

      .subscribe(res => {
       console.log(res);
      }, err => {
       console.log(err);
      });
    
    //window.location.reload();
    }

    setCandidat(candidat: Candidate) {
      console.log('editable', candidat)
      this.editableCandidat = candidat;
    }

}
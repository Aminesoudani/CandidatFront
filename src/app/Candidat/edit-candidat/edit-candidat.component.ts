import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-candidat',
  templateUrl: './edit-candidat.component.html',
  styleUrls: ['./edit-candidat.component.css']
})
export class EditCandidatComponent implements OnInit {
  candidatId!: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.candidatId = +idParam;
      // Use this.candidatId to fetch details of the candidate from your service
    }
  }
}
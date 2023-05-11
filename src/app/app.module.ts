import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddCandidatComponent } from './Candidat/add-candidat/add-candidat.component';
import { GetCandidatComponent } from './Candidat/get-candidat/get-candidat.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteCandidatComponent } from './Candidat/delete-candidat/delete-candidat.component';
import { AppRoutingModule } from './app-routing.module';
import { EditCandidatComponent } from './Candidat/edit-candidat/edit-candidat.component';

@NgModule({
  declarations: [AppComponent, AddCandidatComponent,GetCandidatComponent, DeleteCandidatComponent, EditCandidatComponent],
  imports: [BrowserModule,CommonModule,FormsModule,HttpClientModule,AppRoutingModule],
  exports: [GetCandidatComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Candidat } from '../model/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  private baseUrl = 'http://localhost:8082/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(`${this.baseUrl}`).pipe(
      catchError(this.handleError<Candidat[]>('getAll', []))
    );
  }

  getById(id: number): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError<Candidat>('getById'))
    );
  }

  create(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(`${this.baseUrl}`, candidat).pipe(
      catchError(this.handleError<Candidat>('add'))
    );
  }

  update(id: number, candidat: Candidat): Observable<Candidat> {
    return this.http.put<Candidat>(`${this.baseUrl}/${id}`, candidat).pipe(
      catchError(this.handleError<Candidat>('update'))
    );
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError('delete'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

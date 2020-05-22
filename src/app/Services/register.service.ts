import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Register } from './../Interface/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  readonly url: any;
  constructor(private http: HttpClient) {
    this.url = environment.ROOT_URL.url;
  }

  registerUser(data) {
    return this.http.post<Observable<Register[]>>(this.url + 'user', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(catchError(this.errorHandeler))
  }

  errorHandeler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}

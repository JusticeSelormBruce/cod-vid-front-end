
import { NgForm } from '@angular/forms/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Login } from './../../Interface/login';
import { User } from 'src/app/Interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: User;
  result: any;
  readonly url: any;
  constructor(private http: HttpClient, private route: Router) {
    this.url = environment.ROOT_URL.url;
  }

  ngOnInit(): void { }

  login(data: NgForm) {
    const lgoinDetails: Login = {
      username: data.value.username,
      password: data.value.password,
    };
    this.result = this.http.post(this.url + 'user-login', lgoinDetails, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });

    if (this.result  != null) {

      console.log(this.result);
    } else {

      console.log(this.result);
    }
  }
}

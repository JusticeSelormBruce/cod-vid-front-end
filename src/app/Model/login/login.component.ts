import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './../../Interface/user';
import { Observable } from 'rxjs';
import { Register } from './../../Interface/register';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: Observable<User[]>;
  register: Observable<any>;
  readonly url: any;
  constructor(private http: HttpClient) {
    this.url = environment.ROOT_URL.url;
  }

  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(data) {
    console.log(data.value);
  }

  getUsers() {
    let params = new HttpParams().set('id', '2');
    this.users = this.http.get<User[]>(this.url + 'user', { params });
  }

  registerUser() {
    const data: Register = {
      name: 'http test',
      username: 'helloworld00',
      password: 'password',
      phone: '0022334455',
      phone1: '',
      gender: 'Female',
      domicile: 'Accra',
      region_id: 2,
    };

    this.register = this.http.post(this.url + 'user', data);
  }
}

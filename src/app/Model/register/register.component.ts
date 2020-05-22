import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Region } from './../../Interface/region';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { NgForm } from '@angular/forms';
import { Register } from './../../Interface/register';
import { RegisterService } from './../../Services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regions: Observable<Region[]>;
  AuthUser: Observable<Register[]>;
  readonly url: any;
  public User: any;
  constructor(private http: HttpClient, private registerService: RegisterService) {
    this.url = environment.ROOT_URL.url;
  }

  ngOnInit(): void {
    this.regions = this.http.get<Region[]>(this.url + 'region');
  }

  onSubmit(Data: NgForm) {

    const data: Register = {
      name: Data.value.name,
      username: Data.value.username,
      password: Data.value.password,
      phone: Data.value.phone,
      phone1: Data.value.phone1,
      gender: Data.value.gender,
      domicile: Data.value.domicile,
      region_id: Data.value.region_id,
    }
    this.registerService.registerUser(data).subscribe(
      res => this.User = res

    );
  
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  registerUser(user){
    return this.http.post('url',user)
  };
  loginUser(data){
    return this.http.post('url',data)
  }
}

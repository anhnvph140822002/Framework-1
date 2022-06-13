import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  register(user:any):Observable<IUser>{
    // return data.find(item => item.id == id)
    return this.http.post<IUser>(`${this.API_URL}/signup`,user)
  }

  login(user:any):Observable<IUser>{
    
      return this.http.post<IUser>(`${this.API_URL}/signin`,user)
    
  }
  // logout() {
  //   localStorage.removeItem('token');
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iusers } from './models/users';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  get users(): Observable<Iusers> {
    return of(<Iusers>{
      firstname: 'JOJO',
      lastname: 'Nellissery',
      address: [],
    });
  }
}

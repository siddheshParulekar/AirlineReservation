import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
      return this._http.post<any>("http://localhost:9099/loginuser",user)
  }

  public RegisterUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:9099/registeruser",user)
}

}

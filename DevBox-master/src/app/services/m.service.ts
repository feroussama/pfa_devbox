import { Injectable } from '@angular/core';
import {enableProdMode} from '@angular/core';
import {Http, Headers} from '@angular/http'; // -> hetha deprecated m3adech yemchi 
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'C:/devbox_final/pfa_devbox/models/dev';
import { Response, RequestOptions } from '@angular/http';   
import {  HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class MService {

  authToken: any;
  user: any;
 userUrl='http://localhost:3000/users';
  constructor(private http:HttpClient) { }

  envoi(user){
    //let headers = new Headers();
    let myheader = new HttpHeaders();
    myheader.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/adminspace', user,{headers: myheader});
  }
/*
  deleteUser(id){   
    return this.http.delete('http://localhost:3000/users/delete/:id')  
            .map((response: Response) =>response.json())               
  }*/
  /*
  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const usUrl='http://localhost:3000/users'
    const url = `${usUrl}/${id}`;
  
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }
  */


 registerUser(user){
  let headers = new Headers();
  let myheader = new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/users/accepte', user,{headers: myheader});
   
}
ajouterCategorie(user,categorieDev){

  let headers = new Headers();
  let myheader = new HttpHeaders();
  headers.append('Content-Type','application/json');
  return this.http.post('http://localhost:3000/users/categorie/:categorieDev', user,{headers: myheader});
   

}

 deleteUser(id) {
  const uri = 'http://localhost:3000/users/delete/' + id;

      return this
          .http
          .get(uri)
          .map(res => {
            return res;
          });
}








  
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users/show')
      .pipe(
        catchError(this.handleError('getUsers', []))
      );}
    
    
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

private log(message: string) {
  
}

}









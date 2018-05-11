import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetArticlesService {

  constructor(private http: HttpClient) { }
  getArticles(): Observable<HttpResponse<any>>{
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      console.log('i am called news');
      return this.http.get<any>('api/news', {headers: headers});
  }

}

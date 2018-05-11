import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
@Injectable()
export class GetDefinintionService {
    language = 'en'
    url = environment.base_uri + '/entries/' + this.language + '/';
    id = environment.api_id;
    key = environment.api_key;

  constructor(private http: HttpClient) {
  }
  
  //get the definition of the search word
  getDefinition(word): Observable<HttpResponse<any>>{
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      let wordId = word.toLowerCase();
      console.log('i am called');
      return this.http.get<any>('api/search/' + 'ace', {headers: headers});
  }

}

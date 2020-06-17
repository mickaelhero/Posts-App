import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../Post/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService<T> {

  private baseURL = 'https://jsonplaceholder.typicode.com';


  constructor(protected httpClient: HttpClient, @Inject(String) private endpoint: string) {
  }


  getAll(){
    return this.httpClient.get<T[]>(`${this.baseURL}/${this.endpoint}`);
  }

  getByID(id: number) {
    return this.httpClient.get<T>(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  create(item: T) {
    return this.httpClient.post<T>(`${this.baseURL}/${this.endpoint}`, item);
  }

  deleteByID(id: number) {
    return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${id}`);
  }

  updateByID(id: number, item: T) {
    return this.httpClient.put<T>(`${this.baseURL}/${this.endpoint}/${id}`, item);
  }

}

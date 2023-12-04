import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  url = 'https://api.unsplash.com/';
  private query = new BehaviorSubject<string>('');

  query$ = this.query.asObservable();

  constructor(private http: HttpClient) {}

  getPhotos(page = 1) {
    return this.http.get(`${this.url}photos?page=${page}&per_page=20`);
  }
  getPhotosById(id:string) {
    return this.http.get(`${this.url}photos/${id}`);
  }

  getData(word : string) {
    this.query.next(word);
  }
  search(value : string, page = 1) {
    return this.http.get(
      `${this.url}search/photos/?page=${page}&per_page=20&query=${value}`
    );
  }
}

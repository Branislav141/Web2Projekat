import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  baseUrl = 'http://localhost:5000/api/upload/';

  constructor(private http: HttpClient) {}

  deletePhoto(photoId: number) {
    return this.http.get(this.baseUrl + 'delete/' + photoId);
  }

  getPhoto(photoId: number) {
    return this.http.get(this.baseUrl + photoId);
  }
}

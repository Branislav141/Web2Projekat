import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../../models/Photo';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  baseUrl = 'http://localhost:5000/api/upload/';

  constructor(private http: HttpClient) {}

  deleteUserPhoto(photoId: number) {
    return this.http.get(this.baseUrl + 'deleteUserPhoto/' + photoId);
  }

  deleteWorkRequestPhoto(photoId: number) {
    return this.http.get(this.baseUrl + 'deleteWorkRequestPhoto/' + photoId);
  }

  getPhotoForUser(userId: string) {
    return this.http.get<Photo>(this.baseUrl + userId);
  }

  getAllPhotosForWorkRequest(id: number) {
    return this.http.get<Photo[]>(this.baseUrl + 'workRequest/' + id);
  }
}

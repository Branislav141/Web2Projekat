import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../../../models/Photo';
import { PhotosService } from '../../../../services/photos/photos.service';

@Component({
  selector: 'app-multimedia-attachments',
  templateUrl: './multimedia-attachments.component.html',
  styleUrls: ['./multimedia-attachments.component.css'],
})
export class MultimediaAttachmentsComponent implements OnInit {
  workRequestId = 0;
  // @ts-ignore
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = 'http://localhost:5000/api/upload/workRequests/';
  photos: Photo[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private photosService: PhotosService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((data) => {
      this.workRequestId = data.id;
      this.initializeUploader();
      this.loadPhotosForWorkRequest(data.id);
    });
  }

  loadPhotosForWorkRequest(id: string) {
    this.photosService.getAllPhotosForWorkRequest(+id).subscribe((data) => {
      this.photos = data;
    });
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  deletePhoto(id: number) {
    this.photosService.deleteWorkRequestPhoto(id).subscribe(() => {
      this.loadPhotosForWorkRequest(this.workRequestId.toString());
    });
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + this.workRequestId,
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 5 * 1024 * 1024, // 5mb
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        this.loadPhotosForWorkRequest(this.workRequestId.toString());
      }
    };
  }
}

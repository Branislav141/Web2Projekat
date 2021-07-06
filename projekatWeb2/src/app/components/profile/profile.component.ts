import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/User';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from '../../services/confirmation/confirmation.service';
import { PhotosService } from '../../services/photos/photos.service';
import { Photo } from '../../models/Photo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  // @ts-ignore
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = 'http://localhost:5000/api/upload/users/';
  // @ts-ignore
  currentPhoto: Photo;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private photosService: PhotosService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.getCurrentUserPhoto();
    this.initializeUploader();
  }

  getCurrentUserPhoto() {
    this.photosService.getPhotoForUser(this.user.id).subscribe((data) => {
      this.currentPhoto = data;
    });
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + this.user.id,
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

    this.uploader.onSuccessItem = (item, response) => {
      if (response) {
        this.getCurrentUserPhoto();
      }
    };
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  deletePhoto() {
    this.confirmationService
      .confirm(
        'Confirmation',
        'Are you sure you want to delete this photo?',
        'Confirm',
        '' + 'Cancel'
      )
      .then(() => {
        this.photosService.deleteUserPhoto(this.currentPhoto.id).subscribe(
          () => {
            // @ts-ignore
            this.currentPhoto = null;
            this.toastrService.success('Photo has been deleted');
          },
          () => {
            this.toastrService.error('Failed to delete the photo');
          }
        );
      });
  }
}

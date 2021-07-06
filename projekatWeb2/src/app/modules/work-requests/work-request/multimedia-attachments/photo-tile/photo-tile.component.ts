import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../../../../../models/Photo';

@Component({
  selector: 'app-photo-tile',
  templateUrl: './photo-tile.component.html',
  styleUrls: ['./photo-tile.component.css'],
})
export class PhotoTileComponent implements OnInit {
  // @ts-ignore
  @Input() photo: Photo;
  @Output() deletePhotoEmitter: EventEmitter<number> = new EventEmitter<number>(
    false
  );

  constructor() {}

  ngOnInit(): void {}

  deletePhoto(id: number) {
    this.deletePhotoEmitter.emit(id);
  }
}

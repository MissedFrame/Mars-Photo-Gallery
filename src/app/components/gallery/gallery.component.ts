import { Component, OnInit } from '@angular/core';
import { MarsApiService } from '../../services/fetch-apiservice.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  marsPhotos: any;
  filteredPhotos: any[] = [];
  favorites: any[] = [];

  constructor(private marsApiService: MarsApiService, private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.fetchPhotos('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=FZC1ZGQjvj6EldUo0Qsuxtwpc7SVCb4m4GsbjsQ5&sol=1000');

    this.fetchPhotos('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=FZC1ZGQjvj6EldUo0Qsuxtwpc7SVCb4m4GsbjsQ5&sol=1000');

    this.fetchPhotos('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=FZC1ZGQjvj6EldUo0Qsuxtwpc7SVCb4m4GsbjsQ5&earth_date=2015-6-3');

    this.fetchPhotos('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=FZC1ZGQjvj6EldUo0Qsuxtwpc7SVCb4m4GsbjsQ5');

    this.fetchPhotos('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=FZC1ZGQjvj6EldUo0Qsuxtwpc7SVCb4m4GsbjsQ5&earth_date=2015-6-3&camera=pancam');
  }

  fetchPhotos(apiEndpoint: string): void {
    this.marsApiService.fetchPhotos(apiEndpoint).subscribe(
      data => {
        console.log('GET Request successful:', data);

        const newPhotos = Array.isArray(data.photos) ? data.photos : [];

        this.marsPhotos = this.marsPhotos ? { photos: [...this.marsPhotos.photos, ...newPhotos] } : { photos: newPhotos };

        this.filteredPhotos = this.marsPhotos.photos;
      },
      error => {
        console.error('Error in GET request:', error);
      }
    );
  }

  displayAllPhotos(): void 
  {
    this.filteredPhotos = this.marsPhotos.photos;
  }

  filterPhotosByIdAscending(): void 
  {
    this.marsPhotos.photos = this.marsPhotos.photos.sort((a: any, b: any) => a.id - b.id);
  }

  filterPhotosByIdDescending(): void 
  {
    this.marsPhotos.photos = this.marsPhotos.photos.sort((a: any, b: any) => b.id - a.id);
  }

  filterImagesByCamera(cameraName: string): void 
  {
    this.filteredPhotos = this.marsPhotos.photos.filter((photo: any) => photo.camera.name === cameraName);
  }

  filterPhotosByRover(rover: string): void {
    this.filteredPhotos = this.marsPhotos.photos.filter((photo: any) => photo.rover.name.toLowerCase() === rover.toLowerCase());
  }

  addToFavorites(photo: any): void {
    this.favoritesService.addToFavorites(photo);
    console.log('Added to favorites:', photo);
  }
}

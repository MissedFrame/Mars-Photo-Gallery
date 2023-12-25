import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  addToFavorites(photo: any): void {
    this.favorites.push(photo);
  }

  getFavorites(): any[] {
    return this.favorites;
  }

  removeFromFavorites(photo: any): void {
    const index = this.favorites.findIndex((favPhoto) => favPhoto.id === photo.id);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}

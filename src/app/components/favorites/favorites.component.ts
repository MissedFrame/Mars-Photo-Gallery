import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(photo: any): void {
    this.favoritesService.removeFromFavorites(photo);
  }
}
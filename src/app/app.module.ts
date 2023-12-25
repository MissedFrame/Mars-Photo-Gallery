import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchApiComponent } from './components/display-api/fetch-api.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LightboxModule } from 'ngx-lightbox';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesService } from './services/favorites.service';
import { GalleryComponent } from './components/gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    FetchApiComponent,
    GalleryComponent,
    HomeComponent,
    HeaderComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LightboxModule,
  ],
  providers: [
    FavoritesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LightboxModule } from 'ngx-lightbox';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesService } from './services/favorites.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MarsApiService } from './services/fetch-apiservice.service';



@NgModule({
  declarations: [
    AppComponent,
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
    MarsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

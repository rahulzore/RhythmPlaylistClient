import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { AboutComponent } from "./component/about/about.component";
import { ArtistComponent } from "./component/artist/artist.component";
import { AlbumComponent } from "./component/album/album.component";
import { SearchComponent } from "./component/search/search.component";
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { SpotifyService } from "./component/services/spotify.service";
import { RouterModule, Routes } from '@angular/router';
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { CreatePlaylistComponent } from "./component/createplaylist/createplaylist.component";
import { UserProfileComponent } from "./component/userprofile/userprofile.component";
import { AppRoutingModule } from "./app.routes";
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PlaylistComponent } from './component/playlist/playlist.component'
import { TrackComponent } from './component/track/track.component';
import { EditPlaylistComponent } from './component/editplaylist/editplaylist.component';
import { SplitButtonModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("242475794920-jk2ig7aei9s634uf4nju2ikfarf8odic.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("141104256541949")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  imports: [BrowserModule, 
            DataListModule, 
            ButtonModule, 
            BrowserAnimationsModule, 
            SplitButtonModule, 
            JsonpModule, 
            FormsModule, 
            HttpModule, 
            SocialLoginModule, 
            AppRoutingModule, 
            HttpClientModule, 
            HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false })],
  
  declarations: [AppComponent, 
                UserProfileComponent, 
                NavbarComponent, 
                AboutComponent, 
                SearchComponent, 
                ArtistComponent, 
                AlbumComponent, 
                LoginComponent, 
                WelcomeComponent, 
                CreatePlaylistComponent, 
                PlaylistComponent, 
                TrackComponent, 
                EditPlaylistComponent],
 
  providers: [SpotifyService,
              {
              provide: AuthServiceConfig,
              useFactory: provideConfig
              }],
              
  bootstrap: [AppComponent]

})
export class AppModule { }

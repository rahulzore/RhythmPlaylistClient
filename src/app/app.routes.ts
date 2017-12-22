import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { SearchComponent } from "./component/search/search.component";
import { AboutComponent } from "./component/about/about.component";
import { ArtistComponent } from "./component/artist/artist.component";
import { AlbumComponent } from "./component/album/album.component";
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from "./component/welcome/welcome.component";
import { CreatePlaylistComponent } from "./component/createplaylist/createplaylist.component";
import { PlaylistComponent } from './component/playlist/playlist.component'
import { TrackComponent } from './component/track/track.component';
import { EditPlaylistComponent } from './component/editplaylist/editplaylist.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserProfileComponent} from "./component/userprofile/userprofile.component";




const routes : Routes = [
    
    {path:'', component: WelcomeComponent, pathMatch: 'full'},
    {path:'createplaylist', component: CreatePlaylistComponent, pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
    {path: 'login', component: LoginComponent, pathMatch: 'full'},
    {path: 'search', component: SearchComponent, pathMatch: 'full'},
    {path:'about', component:AboutComponent, pathMatch: 'full'},
    {path:'artist/:id' , component:ArtistComponent, pathMatch: 'full'},
    {path:'album/:id' , component:AlbumComponent, pathMatch: 'full'},
    {path: 'playlist', component: PlaylistComponent, pathMatch: 'full'},
    {path: 'track/:id', component: TrackComponent, pathMatch: 'full'},
    {path: 'editplaylist', component: EditPlaylistComponent, pathMatch: 'full'},
    {path: 'userprofile', component: UserProfileComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

export const routing = [
    RouterModule.forRoot(routes)
];
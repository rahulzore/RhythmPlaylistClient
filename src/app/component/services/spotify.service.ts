import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import { Track } from "../../../Track";
import { Playlist } from "../../../Playlist";

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class SpotifyService {
    private searchUrl: string;
    private redirect_uri: string;
    private client_id = 'efa13ac850d54440bf11925779abfe9a';
    private client_secret = 'f947ab4997c947738a896e7d34f244fb';
    private access_token: string;
    private ArtistUrl: string;
    private AlbumsUrl: string;
    private AlbumUrl: string;
    private TrackUrl: string;
    private WidgetUrl: string;
    private TrackArray: Track[];
    private PlaylistArray: string[];
    private encoded = btoa(this.client_id + ':' + this.client_secret);
    private base64 = 'OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg=';
    private tracksURL = 'api/tracks';
    private playlistURL = 'api/playlists';


    constructor(private _http: Http, private http: HttpClient) {

    }

    // Function to get auth token from Spotify Api
    getToken() {

        var params = ('grant_type=client_credentials');

        var headers = new Headers();
        headers.append('Authorization', 'Basic ' + this.encoded);

        headers.append('Content-Type', 'application/x-www-form-urlencoded');




        return this._http.post('/api/token', params, { headers: headers })
            .map(res => res.json());
    }


    // Search Function to receive artists from Spotify Api
    searchMusic(str: string, type = 'artist', token: string) {


        console.log(this.encoded);

        this.searchUrl = '/v1/search?query=' + str + '&offset=0&limit=50&type=' + type;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);

        return this._http.get(this.searchUrl, { headers: headers })
            .map((res: Response) => res.json())


    }

    // Search function to receive tracks from Spotify Api
    searchTracks(str: string, type = 'track', token: string) {


        console.log(this.encoded);

        this.searchUrl = '/v1/search?query=' + str + '&offset=0&limit=50&type=' + type + '&market=US';
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);


        return this._http.get(this.searchUrl, { headers: headers })
            .map((res: Response) => res.json())


    }

    // Function to retrieve Artist data from Spotify Api
    getArtist(id: string, token: string) {


        this.ArtistUrl = '/v1/artists/' + id;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);


        return this._http.get(this.ArtistUrl, { headers: headers })
            .map((res: Response) => res.json())


    }


    // Function to retrieve Albums from Spotify Api
    getAlbums(artistId: string, token: string) {


        this.AlbumsUrl = '/v1/artists/' + artistId + '/albums/?query=&limit=50';
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);


        return this._http.get(this.AlbumsUrl, { headers: headers })
            .map((res: Response) => res.json())


    }


    // Function to retrieve Album data from Spotify Api
    getAlbum(id: string, token: string) {


        this.AlbumUrl = '/v1/albums/' + id;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);


        return this._http.get(this.AlbumUrl, { headers: headers })
            .map((res: Response) => res.json())

    }

    // Function to retrieve tracks from Spotify Api
    getTrack(id: string, token: string) {


        this.TrackUrl = '/v1/tracks/' + id;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer' + token);


        return this._http.get(this.TrackUrl, { headers: headers })
            .map((res: Response) => res.json())
    }

    // Function to retrieve tracks from angular HTTP databse (in-memory-web-api)
    getTracks(): Observable<Track[]> {
        return this.http.get<Track[]>(this.tracksURL)
            .pipe(
            catchError(this.handleError('getTracks', []))
            );
    }



    // Function to add tracks to angular HTTP databse (in-memory-web-api)
    addTrack(track: Track): Observable<Track> {
        return this.http.post<Track>(this.tracksURL, track, httpOptions)
            .pipe(
            catchError(this.handleError<Track>('addTrack')
            ));

    }
  
    // Function to delete track from angular HTTP database (in-memory-web-api)
    deleteTrack(track: Track): Observable<Track> {

        const id = track.id;
        const url = `${this.tracksURL}/${id}`;

        return this.http.delete<Track>(url, httpOptions)
            .pipe(
            catchError(this.handleError<Track>('deleteTrack'))
            );
    }

    // Error handling function
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }



}

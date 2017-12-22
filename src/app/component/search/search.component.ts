import { Component } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Artist } from "../../../Artist";
import { Track } from '../../../Track';
import { Album } from '../../../Album';
import { MenuItem } from 'primeng/primeng';

declare var swal: any;


@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss'],
    providers: [SpotifyService]
})

export class SearchComponent {

    searchStr: string;
    searchRes: Artist[];
    searchResTrack: Track[];
    tracks: Track[] = [];
    temp: Track[];
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Sort By Album', command: () => {
                    this.sortByAlbum();
                }
            },
            {
                label: 'Sort By Artist', command: () => {
                    this.sortByArtist();
                }
            },
            {
                label: 'Sort By Popularity', command: () => {
                    this.sortByPopularity();
                }
            },

        ];
    }

    constructor(private _spotifyService: SpotifyService) { }

    searchMusic() {
        this._spotifyService.getToken()
            .subscribe(res => {
                this._spotifyService.searchMusic(this.searchStr, 'artist', res.access_token)
                    .subscribe(res => {
                        this.searchRes = res.artists.items;
                    })
            })

    }

    // Searching tracks function using searchTracks function from Service.ts
    searchTracks() {
        this._spotifyService.getToken()
            .subscribe(res => {
                this._spotifyService.searchTracks(this.searchStr, 'track', res.access_token)
                    .subscribe(res => {
                        this.searchResTrack = res.tracks.items;

                    })
            })
    }

    // Adding tracks function using addTrack function from Service.ts
    add(trackID: string, name: string, album: Album, artists: Artist[], id: number, popularity: string): void {

        var widgetURL = "https://open.spotify.com/embed?uri=spotify:track:" + trackID;
        this._spotifyService.addTrack({ trackID, name, album, artists, popularity, widgetURL } as Track)
            .subscribe(track => {
                this.tracks.push(track);

                // Sweetalert2 function for success
                swal({
                    type: 'success',
                    title: 'Track Added To PlayList',
                    showConfirmButton: false,
                    timer: 1800
                }).catch(function (timeout) {
                    if (timeout === 'timer') {
                    }
                });

            });
    }



    // Sorting algo for sorting by Artist
    sortByArtist() {
        this.searchResTrack.sort(function (track1, track2) {
            if (track1.artists[0].name < track2.artists[0].name) {
                return -1;
            }
            else if (track1.artists[0].name > track2.artists[0].name) {
                return 1;
            }
            else {
                return 0;
            }
        });

    }

     // Sorting algo for sorting by Album
    sortByAlbum() {
        this.searchResTrack.sort(function (track1, track2) {
            if (track1.album.name < track2.album.name) {
                return -1;
            }
            else if (track1.album.name > track2.album.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }

     // Sorting algo for sorting by Popularity
    sortByPopularity() {
        this.searchResTrack.sort(function (track1, track2) {
            if (track1.popularity > track2.popularity) {
                return -1;
            }
            else if (track1.popularity < track2.popularity) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
}



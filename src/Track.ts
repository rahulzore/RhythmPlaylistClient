import { Album } from './Album';
import { Artist } from './Artist';

export class Track{
    id:number;
    trackID: string;
    name:string;
    
    album:Album;
    artists: Artist[];
    popularity: string;
    widgetURL: string;
    

}
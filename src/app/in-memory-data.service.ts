import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Track } from '../Track';

export class InMemoryDataService implements InMemoryDbService{

    createDb(){
        var tracks=[
            {
                id:0,
                trackID: "",
                name:"",
                genre:"",
                album:"",
                artist:"",
                

            }
        ];

       
           
        return {tracks };
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogAPI } from '../models/responses/dog-api.model';

@Injectable({
  providedIn: 'root'
})

export class DogsService {


  private apiURL = 'https://dog.ceo/api/';
  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<DogAPI> {
    return this.http.get<DogAPI>(this.apiURL + 'breeds/list/all');
  }

  getDogImagesByBreed(breed = 'husky', imgNumber = 5): Observable<DogAPI> {
    return this.http.get<DogAPI>(this.apiURL + `breed/${breed}/images/random/${imgNumber}`);
  }

  getDogImagesBySubBreed(breed = 'hound', subBreed = 'afghan', imgNumber = 5): Observable<DogAPI> {
    return this.http.get<DogAPI>(this.apiURL + `breed/${breed}/${subBreed}/images/random/${imgNumber}`);
  }
}

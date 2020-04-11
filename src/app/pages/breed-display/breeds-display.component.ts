import { Component, OnInit, DebugElement } from '@angular/core';
import { DogBreed } from '../../models/dogBreed.model';
import { DogsService } from '../../services/dogs.service';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lightbox, LightboxEvent, LIGHTBOX_EVENT } from 'ngx-lightbox';
import { STATUS } from 'src/app/common/toggle-button/toggle-button.component';

@Component({
  selector: 'app-breed-display',
  templateUrl: './breeds-display.component.html',
  styleUrls: ['./breeds-display.component.css']
})
export class BreedsDisplayComponent implements OnInit {

  dogBreedsList: Array<DogBreed> = [];
  usedDogBreedsList: Array<DogBreed> = [];
  dogsList: Array<any> = [];
  currentBreed = '';
  btnStatus: number = STATUS.START;
  currentSubBreed: Array<string> = [];
  intervalSubscriptor: Subscription;
  lightboxSubscriptor: Subscription;
  imageNumber = 10;
  maxNumberOfBreeds: 5;
  intervalTime = 10000;

  intervalBtn = { START: 'Start Interval', STOP: 'Stop Interval' };

  constructor(private dogsService: DogsService, private lightbox: Lightbox, private lightboxEvent: LightboxEvent) { }

  ngOnInit(): void {
    this.getDogBreeds();
  }

  getDogBreeds(): void {
    this.dogsService.getAllBreeds().pipe(
      map(data => {
        if (data.status === 'success') {
          const breeds = this.shuffleBreeds(data.message);
          breeds.forEach(item => {
            this.dogBreedsList.push(new DogBreed(item[0], item[1]));
          });
        }
      })
    ).subscribe(() => {
      this.getContent();
      this.startInterval();
    });
  }

  shuffleBreeds(data: any): Array<any> {
    let breeds = Object.keys(data).map(breed => [breed, data[breed]]);
    breeds.sort(() => 0.5 - Math.random());
    if (breeds.length > this.maxNumberOfBreeds) {
      breeds = breeds.slice(0, this.maxNumberOfBreeds);
    }
    return breeds;
  }

  getRandomIndexFromArray(array: Array<any>): number {
    return Math.floor(Math.random() * array.length);
  }

  getContent(): void {
    const index = this.getRandomIndexFromArray(this.dogBreedsList);
    const dogBreed = this.dogBreedsList.splice(index, 1);
    this.usedDogBreedsList.push(dogBreed[0]);
    this.currentBreed = dogBreed[0].breed;
    this.currentSubBreed = dogBreed[0].subBreed;

    this.dogsService.getDogImagesByBreed(dogBreed[0].breed, this.imageNumber).pipe(
      map((data) => {
        if (data.status === 'success') {
          this.dogsList.length = 0;
          data.message.forEach(imgSrc => {
            this.dogsList.push({ breed: dogBreed[0].breed, subBreed: dogBreed[0].subBreed, src: imgSrc, caption: '', thumb: imgSrc });
          });
        }
      })
    ).subscribe(() => {
      if (this.dogBreedsList.length === 0) {
        this.stopInterval();
        this.getDogBreeds();
      }
    }
    );
  }

  toggleInterval($event): void {
    switch ($event) {
      case 0:
        this.startInterval();
        break;
      case 1:
        this.stopInterval();
        break;
    }
  }

  startInterval(): void {
    const contentInterval = interval(this.intervalTime);
    this.intervalSubscriptor = contentInterval.subscribe(() => { this.getContent(); });
    this.btnStatus = STATUS.STOP;
  }

  stopInterval(): void {
    if (this.intervalSubscriptor) {
      this.intervalSubscriptor.unsubscribe();
      this.btnStatus = STATUS.START;
    }
  }

  openImageDetails($event): void {
    this.lightboxSubscriptor = this.lightboxEvent.lightboxEvent$.subscribe(event => this.onReceivedLightboxEvent(event));
    this.lightbox.open(this.dogsList, $event);
    this.stopInterval();

  }

  closeImageDetails(): void {
    // close lightbox programmatically
    this.btnStatus = STATUS.STOP;
    this.startInterval();
  }

  private onReceivedLightboxEvent(event: any): void {
    switch (event.id) {
      case LIGHTBOX_EVENT.CLOSE:
        // this.closeImageDetails();
        this.lightboxSubscriptor.unsubscribe();
        break;
      case LIGHTBOX_EVENT.OPEN:

        break;
      default:
        console.log('Unhandled State', event);
        break;
    }
  }


  getDogImagesByBreed(breed: string): void {
    this.dogsService.getDogImagesByBreed(breed, this.imageNumber);
  }

}

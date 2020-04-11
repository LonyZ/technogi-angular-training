import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})

export class DogComponent implements OnInit {

  breed: string;
  subBreed: Array<string>;
  src: string;
  price: number;
  caption: string;
  thumb: string;

  @Input() config: any;
  @Input() photoIndex: number;
  @Output() openDetails = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.breed = this.config.breed;
    this.subBreed = this.config.subBreed;
    this.src = this.config.src;
    this.thumb = this.config.src;
    this.price = this.config.price || 0;
    this.caption = this.config.caption || '';
  }

  getBgURL(): string {
    return `url(${this.src})`;
  }

  openDogDetails(): void {
    this.openDetails.emit(this.photoIndex);
  }
}

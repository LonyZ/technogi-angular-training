import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroClass = {
    label: 'Hero Class',
    options: ['primary', 'secondary', 'success', 'info', 'light', 'dark'],
    defaultValue: 'info'
  };

  heroSize = {
    label: 'Hero Size',
    options: ['small', 'medium', 'large'],
    defaultValue: 'medium'
  };

  heroTitle = {
    label: 'App Title',
    defaultValue: 'Angular Training Course'
  };

  heroSubtitle = {
    label: 'App Subtitle',
    defaultValue: 'Just let me die'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

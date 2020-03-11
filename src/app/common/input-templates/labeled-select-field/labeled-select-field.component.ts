import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-labeled-select-field',
  templateUrl: './labeled-select-field.component.html',
  styleUrls: ['./labeled-select-field.component.css']
})
export class LabeledSelectFieldComponent implements OnInit {
  @Input() config: any;
  constructor() { }

  ngOnInit(): void {
  }

}

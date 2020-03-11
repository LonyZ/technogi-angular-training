import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labeled-text-field',
  templateUrl: './labeled-text-field.component.html',
  styleUrls: ['./labeled-text-field.component.css']
})
export class LabeledTextFieldComponent implements OnInit {
  @Input() config: any;
  constructor() { }

  ngOnInit(): void {
  }

}

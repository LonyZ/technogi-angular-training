import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export const STATUS = { START: 0, STOP: 1 };

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css']
})

export class ToggleButtonComponent implements OnInit {

  @Input() btnTexts: { START: string, STOP: string } = { START: '', STOP: '' };
  statusValue: number = STATUS.START;

  @Input() get status() {
    return this.statusValue;
  }
  set status(value) {
    this.statusValue = value;
    this.statusChange.emit(this.statusValue);
    this.changeButtonContent();
  }

  @Output() statusChange = new EventEmitter();
  @Output() buttonCallback = new EventEmitter<number>();

  text = '';
  buttonClass = 'btn btn-primary';

  constructor() { }

  ngOnInit(): void {
    this.text = this.status === STATUS.START ? this.btnTexts.START : this.btnTexts.STOP;
    this.buttonClass = this.status === STATUS.START ? 'btn btn-primary' : 'btn btn-secondary';
  }

  toggleButton(): void {
    this.buttonCallback.emit(this.status);
    this.changeStatus();
  }

  changeStatus(): void {
    switch (this.status) {
      case STATUS.START:
        this.status = STATUS.STOP;
        break;
      case STATUS.STOP:
        this.status = STATUS.START;
        break;
    }
  }

  changeButtonContent(): void {
    switch (this.status) {
      case STATUS.START:
        this.text = this.btnTexts.START;
        this.buttonClass = 'btn btn-primary';
        break;
      case STATUS.STOP:
        this.text = this.btnTexts.STOP;
        this.buttonClass = 'btn btn-secondary';
        break;
      default:
        console.log(`Unhandled Case. Status value: ${this.status}`);
        break;
    }
  }
}

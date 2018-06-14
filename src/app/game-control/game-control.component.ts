import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number: number = 0;
  timer: any;

disableBtn = false;

  @Output() numberCreated = new EventEmitter<number>;


  start() {
    this.disableBtn = true;
    this.timer = setInterval(() => {
      this.number += 1;
      this.numberCreated.emit(this.number);
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
    this.disableBtn = !this.disableBtn;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d8',
  templateUrl: './d8.component.html',
  styleUrls: ['./d8.component.css']
})
export class D8Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll8(){
    let roll = Math.ceil(Math.random()*8);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }

}

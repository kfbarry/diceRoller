import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d20',
  templateUrl: './d20.component.html',
  styleUrls: ['./d20.component.css']
})
export class D20Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll20(){
    let roll = Math.ceil(Math.random()*20);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }

}

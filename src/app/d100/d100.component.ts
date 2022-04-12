import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d100',
  templateUrl: './d100.component.html',
  styleUrls: ['./d100.component.css']
})
export class D100Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll100(){
    let roll = Math.ceil(Math.random()*100);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }

}

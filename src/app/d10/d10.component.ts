import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d10',
  templateUrl: './d10.component.html',
  styleUrls: ['./d10.component.css']
})
export class D10Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll10(){
    let roll = Math.ceil(Math.random()*10);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }

}


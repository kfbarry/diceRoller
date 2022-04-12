import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d6',
  templateUrl: './d6.component.html',
  styleUrls: ['./d6.component.css']
})
export class D6Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll6(){
    let roll = Math.ceil(Math.random()*6);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }

}


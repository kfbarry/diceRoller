import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d4',
  templateUrl: './d4.component.html',
  styleUrls: ['./d4.component.css']
})
export class D4Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll4(){
    let roll = Math.ceil(Math.random()*4);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }

}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d12',
  templateUrl: './d12.component.html',
  styleUrls: ['./d12.component.css']
})
export class D12Component implements OnInit {

  currentRoll: number = 0;
  pastRolls: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  roll12(){
    let roll = Math.ceil(Math.random()*12);
    this.currentRoll = roll;
    this.pastRolls.unshift(roll); 
    console.log(this.pastRolls);
  }


}

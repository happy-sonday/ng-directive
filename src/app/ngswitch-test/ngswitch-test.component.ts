import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-test',
  templateUrl: './ngswitch-test.component.html',
  styleUrls: ['./ngswitch-test.component.scss']
})
export class NgswitchTestComponent implements OnInit {

  foods = ['chkicken', 'pig', 'cow', 'hamburger'];
  food = '';
  constructor() { }

  ngOnInit(): void {
  }

}

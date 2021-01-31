import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-test',
  templateUrl: './ngfor-test.component.html',
  styleUrls: ['./ngfor-test.component.scss']
})
export class NgforTestComponent implements OnInit {

  animals=['고양이','강아지','늑대','사자','여우','기린','하마'];
  constructor() { }

  ngOnInit(): void {
  }

}

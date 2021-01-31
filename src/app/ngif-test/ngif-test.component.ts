import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-test',
  templateUrl: './ngif-test.component.html',
  styleUrls: ['./ngif-test.component.scss']
})
export class NgifTestComponent implements OnInit {
  isShow=false;

/*   member={
    name: 'sonday',
    email: 'mrsmiler1106@gmail.com',

  } */
  member={
    name: 'son',
    email: 'mrsmiler1106@gmail.com',

  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-test',
  templateUrl: './ngclass-test.component.html',
  styleUrls: ['./ngclass-test.component.scss']
})
export class NgclassTestComponent implements OnInit {
  isMyClass=true;
  //isMyClass=false;
  constructor() { }

  myObj={
    'test-class':true,
    'your-class':0,
    //'your-class':true,
    test:true
  }
  ngOnInit(): void {
  }

}

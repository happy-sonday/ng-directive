import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-test',
  templateUrl: './ngstyle-test.component.html',
  styleUrls: ['./ngstyle-test.component.scss']
})
export class NgstyleTestComponent implements OnInit {
  boilable = true;
  edible = true;
  highlight = true;
  styleConf={
    color:this.boilable ? 'green' : 'yellow',
    'font-weight': this.edible ? 'bold' : 'normal',
    'background-color': this.highlight ? 'blue' : 'yellow'
  };
  constructor() { }

  ngOnInit(): void {
  }

}

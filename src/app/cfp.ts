import {Component} from 'angular2/core';


@Component({
  selector: 'cfp-app',
  providers: [],
  templateUrl: 'app/cfp.html',
  directives: [],
  pipes: []
})
export class CfpApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}

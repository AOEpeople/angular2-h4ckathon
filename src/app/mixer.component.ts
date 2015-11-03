import {Component, NgFor} from 'angular2/angular2';
import {ViewEncapsulation} from 'angular2/angular2';
import {SliderComponent} from './slider.component';

@Component({
  selector: 'mixer',
  template: `
    <div class="panel panel-default">
    
      <slider *ng-for="#og of optiongroups" [option-group]="og"></slider>

    </div>
    `,
  directives: [NgFor, SliderComponent],
  styleUrls: ['css/mixer.css'],
  encapsulation: ViewEncapsulation.Native

})

export class MixerComponent  {
  public title = 'hello world';
  public optiongroups:Array<IOptionGroup> = [];
  constructor() {
    this.optiongroups[0] = {name:'SMS', value:50};
    this.optiongroups[1] = {name:'Surf', value:100};
    this.optiongroups[2] = {name:'Min', value:300};
  }
}

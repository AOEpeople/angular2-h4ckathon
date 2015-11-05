import {Component, NgFor} from 'angular2/angular2';
import {ViewEncapsulation} from 'angular2/angular2';
import {SliderComponent} from './slider.component';
import {DatenturboComponent} from './datenturbo.component';
import {OptionService} from './option.service';

@Component({
    selector: 'mixer',
    template: `

    <div class="panel panel-primary">
      <div class="panel-heading">Mixer</div>
      <div class="panel-body">
        <slider *ng-for="#availableOption of availableOptions" [available-option]="availableOption" [datenturbo]="datenturbo"></slider>
        <datenturbo [enabled]="datenturbo" (toggle)="toggleDatenturbo()"></datenturbo>
      </div>
      </div>
    `,
    directives: [NgFor, SliderComponent, DatenturboComponent],
    styleUrls: ['css/mixer.css'],
    encapsulation: ViewEncapsulation.Native

})

export class MixerComponent  {

  private availableOptions:Array<IAvailableOption> = [];
  private datenturbo:Boolean = false;

  constructor(private optionservice:OptionService) {
    this.availableOptions = this.optionservice.getAvailableOptions();
  }

  toggleDatenturbo() {
    this.datenturbo = !this.datenturbo;

  }

}

interface IAvailableOption {
    name:String,
    values:Array<Number>,
    datenturbo?:Boolean
}

interface IOption {
    name: String,
    value: Number
}

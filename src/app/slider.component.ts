import {Component,Input} from 'angular2/angular2';
import {OptionService} from './option.service';

@Component({
    selector: 'slider',
    template: `
    <div class="row" [hidden]="isShowSlider()">
            <label>{{availableOption.name}}</label>
            <input type="range" min="0" max="3" step="1" [value]="getIndexForCurrentOption()" (input)="doUpdate($event.target.value)"></input>
            <span class="range-value">{{currentOption.value}}</span>
    </div>
    `,
    directives: []
})
export class SliderComponent {
    @Input('available-option')
    public availableOption:IAvailableOption;

    @Input('datenturbo')
    public datenturbo:Boolean;

    private currentOption:IOption;

    constructor(private optionService: OptionService) {}

    onInit() {
        this.doUpdate(0);
    }

    getIndexForCurrentOption():Number {
        let index = 0;
        for(let i=0; i<this.availableOption.values.length; i++) {

        }
        return index;
    }

    doUpdate(newvalue:number) {
        this.currentOption = this.optionService.getOptionForIndex(this.availableOption, newvalue);
    }

    isShowSlider():Boolean {
        if(this.availableOption.datenturbo==null) {
            return false;
        }
        if(this.availableOption.datenturbo == false && this.datenturbo == false ) {
            return false;
        }
        if(this.availableOption.datenturbo == true && this.datenturbo == true) {
            return false;
        }
        return true;
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

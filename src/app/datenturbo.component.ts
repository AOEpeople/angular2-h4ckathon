import {Component, Input, Output, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'datenturbo',
    template: `
           <h3><input type="checkbox" [value]="enabled" (change)="onChanged()"></input> Datenturbo</h3>

    `
})
export class DatenturboComponent {
    @Input('enabled') enabled: Boolean;
    @Output() toggle: EventEmitter = new EventEmitter();

    onChanged() {
        this.toggle.next(null);
    }
}

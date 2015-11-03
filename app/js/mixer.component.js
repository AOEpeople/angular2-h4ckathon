System.register(['angular2/angular2', './slider.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, angular2_2, slider_component_1;
    var MixerComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
                angular2_2 = angular2_1_1;
            },
            function (slider_component_1_1) {
                slider_component_1 = slider_component_1_1;
            }],
        execute: function() {
            MixerComponent = (function () {
                function MixerComponent() {
                    this.title = 'hello world';
                    this.optiongroups = [];
                    this.optiongroups[0] = { name: 'SMS', value: 50 };
                    this.optiongroups[1] = { name: 'Surf', value: 100 };
                    this.optiongroups[2] = { name: 'Min', value: 300 };
                }
                MixerComponent = __decorate([
                    angular2_1.Component({
                        selector: 'mixer',
                        template: "\n    \n    <div class=\"panel panel-default\">\n    \n      <slider *ng-for=\"#og of optiongroups\" [option-group]=\"og\"></slider>\n\n    </div>\n    ",
                        directives: [angular2_1.NgFor, slider_component_1.SliderComponent],
                        styleUrls: ['css/mixer.css'],
                        encapsulation: angular2_2.ViewEncapsulation.Native
                    }), 
                    __metadata('design:paramtypes', [])
                ], MixerComponent);
                return MixerComponent;
            })();
            exports_1("MixerComponent", MixerComponent);
        }
    }
});

//# sourceMappingURL=mixer.component.js.map

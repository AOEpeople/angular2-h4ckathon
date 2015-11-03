System.register(['angular2/angular2'], function(exports_1) {
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
    var angular2_1;
    var SliderComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            SliderComponent = (function () {
                function SliderComponent() {
                }
                SliderComponent.prototype.doUpdate = function (newvalue) {
                    this.optionGroup.value = newvalue;
                };
                __decorate([
                    angular2_1.Input(), 
                    __metadata('design:type', Object)
                ], SliderComponent.prototype, "optionGroup");
                SliderComponent = __decorate([
                    angular2_1.Component({
                        selector: 'slider',
                        template: "\n\t<div>\n\t\t<label>{{optionGroup.name}}</label>\n\t\t<input type=\"range\" [value]=\"optionGroup.value\" max=\"500\" (change)=\"doUpdate($event.target.value)\"></input>\n\t\t<span class=\"range-value\">{{optionGroup.value}}</span>\n\t</div>\n\t",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], SliderComponent);
                return SliderComponent;
            })();
            exports_1("SliderComponent", SliderComponent);
        }
    }
});

//# sourceMappingURL=slider.component.js.map

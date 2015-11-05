System.register(['angular2/angular2', './option.service'], function(exports_1) {
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
    var angular2_1, option_service_1;
    var SliderComponent;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (option_service_1_1) {
                option_service_1 = option_service_1_1;
            }],
        execute: function() {
            SliderComponent = (function () {
                function SliderComponent(optionService) {
                    this.optionService = optionService;
                }
                SliderComponent.prototype.onInit = function () {
                    this.doUpdate(0);
                };
                SliderComponent.prototype.getIndexForCurrentOption = function () {
                    var index = 0;
                    for (var i = 0; i < this.availableOption.values.length; i++) {
                    }
                    return index;
                };
                SliderComponent.prototype.doUpdate = function (newvalue) {
                    this.currentOption = this.optionService.getOptionForIndex(this.availableOption, newvalue);
                };
                SliderComponent.prototype.isShowSlider = function () {
                    if (this.availableOption.datenturbo == null) {
                        return false;
                    }
                    if (this.availableOption.datenturbo == false && this.datenturbo == false) {
                        return false;
                    }
                    if (this.availableOption.datenturbo == true && this.datenturbo == true) {
                        return false;
                    }
                    return true;
                };
                __decorate([
                    angular2_1.Input('available-option'), 
                    __metadata('design:type', Object)
                ], SliderComponent.prototype, "availableOption");
                __decorate([
                    angular2_1.Input('datenturbo'), 
                    __metadata('design:type', Boolean)
                ], SliderComponent.prototype, "datenturbo");
                SliderComponent = __decorate([
                    angular2_1.Component({
                        selector: 'slider',
                        template: "\n    <div class=\"row\" [hidden]=\"isShowSlider()\">\n            <label>{{availableOption.name}}</label>\n            <input type=\"range\" min=\"0\" max=\"3\" step=\"1\" [value]=\"getIndexForCurrentOption()\" (input)=\"doUpdate($event.target.value)\"></input>\n            <span class=\"range-value\">{{currentOption.value}}</span>\n    </div>\n    ",
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [option_service_1.OptionService])
                ], SliderComponent);
                return SliderComponent;
            })();
            exports_1("SliderComponent", SliderComponent);
        }
    }
});

//# sourceMappingURL=slider.component.js.map

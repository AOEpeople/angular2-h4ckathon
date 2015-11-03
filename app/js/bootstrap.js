System.register(['angular2/angular2', './mixer.component', './option.service'], function(exports_1) {
    var angular2_1, mixer_component_1, option_service_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (mixer_component_1_1) {
                mixer_component_1 = mixer_component_1_1;
            },
            function (option_service_1_1) {
                option_service_1 = option_service_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(mixer_component_1.MixerComponent, [option_service_1.OptionService]);
        }
    }
});

//# sourceMappingURL=bootstrap.js.map

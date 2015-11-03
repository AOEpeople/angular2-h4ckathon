System.register(['angular2/angular2', './mixer.component'], function(exports_1) {
    var angular2_1, mixer_component_1;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (mixer_component_1_1) {
                mixer_component_1 = mixer_component_1_1;
            }],
        execute: function() {
            angular2_1.bootstrap(mixer_component_1.MixerComponent);
        }
    }
});

//# sourceMappingURL=bootstrap.js.map

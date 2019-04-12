angular
    .module('app')
    .component('frames', {
        templateUrl: 'app/components/frames/frames.html',
        controllerAs:'frames',
        controller: () => {


            this.frames = [{
                heading: 'Hello',
                detail: 'aksdnfaskjnfasdfkjnaskjdnfsakjdfn',

            }];
        }
    });

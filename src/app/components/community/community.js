angular
    .module('app')
    .component('community', {
        templateUrl: 'app/components/community/community.html',
        controllerAs:'comm',
        controller: function ($stateParams) {
            console.log($stateParams);

            var self = this;

            self.handle = $stateParams.handle;

        }
    });

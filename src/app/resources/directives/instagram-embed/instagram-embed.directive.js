angular
    .module('app')
    .directive('instagramEmbed', instagramEmbed)

function instagramEmbed($timeout,$compile) {
    return {
        templateUrl: 'app/resources/directives/instagram-embed/instagram-embed.directive.html',
        controller: function () {
        },
        link: function (scope, elem, attr) {

            var po = document.createElement('script');

            po.type = 'text/javascript';

            po.async = true;
            po.defer = true;

            po.src = '//www.instagram.com/embed.js';

            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
    
        }
    }
}


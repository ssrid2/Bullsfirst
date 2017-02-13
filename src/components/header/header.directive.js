(function () {
    'use strict';

    angular
        .module('app.header')
        .directive('tmplHeader', directiveFunction)
        .controller('HeaderController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/header/header.html',
            scope: {
            },
            controller: 'HeaderController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = [];

    /* @ngInject */
    function ControllerFunction() {

    }

})();

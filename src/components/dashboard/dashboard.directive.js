(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .directive('tmplDashboard', directiveFunction)
        .controller('DashboardController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/dashboard/dashboard.html',
            scope: {
            },
            controller: 'DashboardController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['accountService'];

    /* @ngInject */
    function ControllerFunction(accountService) {
        var vm = this;

        vm.total = {
            marketValue: 0,
            cash: 0
        },
        vm.addAccount = addAccount;

        vm.sortType = 'marketValue';
        vm.sortReverse = true;

        activate();

        function activate() {
            vm.accounts = accountService.getAccounts();
            for (var i = 0; i < vm.accounts.length; i++) {
                vm.total.marketValue += vm.accounts[i].marketValue;
                vm.total.cash += vm.accounts[i].cash;
            }
            return vm.accounts;
        }

        function addAccount() {
            var newAccount = accountService.addAccount();
            getTotal(newAccount);
        }

        function getTotal(newAccount) {
            vm.total.marketValue += newAccount.marketValue;
            vm.total.cash += newAccount.cash;
        }

    }

})();

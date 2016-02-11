(function () {
    'use strict';
    angular.module('BB',[])
        .directive('bbSidebar', function () {
            return {
                restrict: 'E',
                scope: {
                    listItems: '='
                },
                link: function ($scope, element, attr) {
                    $scope.state = angular.isUndefined(attr.state) ? false : attr.state;
                },
                templateUrl: 'bb-sidebar-template.html'
            };
        })
})();
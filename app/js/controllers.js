'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController', function($scope) {
    $scope.name="AngularSpike";
    $scope.phones = [
        {'name': 'Nexus S',
         'snippet': 'Fast just got faster with Nexus S.',
         'age': 10
        },
        {'name': 'Motorola XOOM™ with Wi-Fi',
         'snippet': 'The Next, Next Generation tablet.',
         'age': 20
        },
        {'name': 'MOTOROLA XOOM™',
         'snippet': 'The Next, Next Generation tablet.',
         'age': 1
        }
    ];

    $scope.orderProperty = 'age';
});

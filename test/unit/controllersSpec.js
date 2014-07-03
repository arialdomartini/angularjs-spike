'use strict';

describe('PhoneCat controllers', function() {

    describe('PhoneListCtrl', function(){
        var scope, ctrl;
        
    beforeEach(module('phonecatApp'));
        
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('PhoneListController', {$scope:scope});
        }));
        
        it('should create "phones" model with 3 phones', function() {
            expect(scope.phones.length).toBe(3);
        });
        
        
        it('should set the default value of orderProperty model', function() {
            expect(scope.orderProperty).toBe('age');
        });
    });
});

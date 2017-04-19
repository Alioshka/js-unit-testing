'use strict';

const path = require('path');
const Scope = require(path.resolve('src/scope'));

describe('Scope', () => {
    it('can be constructed and used as an object', () => {
        let scope = new Scope();
        scope.someProperty = 1;
        expect(scope.someProperty).toBe(1);
    });

    it('calls the watch function with the scope as the argument', () => {
        let scope = new Scope();

        let watchFn = jasmine.createSpy();
        let listenerFn = jasmine.createSpy();

        let watchFn2 = jasmine.createSpy();
        let listenerFn2 = jasmine.createSpy();

        scope.$watch(watchFn, listenerFn);
        scope.$watch(watchFn2, listenerFn2);

        scope.$digest();

        expect(watchFn).toHaveBeenCalledWith(scope);
        expect(watchFn2).toHaveBeenCalledWith(scope);
    });

    it('calls the listener function when the watched value changes', () => {
        let scope = new Scope();

        scope.someValue = 'a';
        scope.counter = 0;

        scope.$watch(
            function(_scope) { return _scope.someValue; },
            function(newValue, oldValue, _scope) { _scope.counter++; }
        );

        expect(scope.counter).toBe(0);

        scope.$digest();
        expect(scope.counter).toBe(1);

        scope.$digest();
        expect(scope.counter).toBe(1);

        scope.someValue = 'b';
        expect(scope.counter).toBe(1);
        scope.$digest();
        expect(scope.counter).toBe(2);

        scope.$digest();
        expect(scope.counter).toBe(2);
    });
});